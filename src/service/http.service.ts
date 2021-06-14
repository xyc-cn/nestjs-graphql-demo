import { HttpService, Inject, Injectable, Scope, Logger } from '@nestjs/common';
import config from '../config';
import { SessionServiceType } from './session.service';
import * as _ from 'lodash';

/**
 * scope 指定注入的实例是单例还是其他模式，默认为单例
 */
@Injectable({ scope: Scope.DEFAULT })
export class HttpClientService {
  static config = _.merge({}, config.httpClient);
  static initInstance = false;
  constructor(
    @Inject('SessionService') private sessionService: SessionServiceType,
    private httpService: HttpService,
    private logger: Logger,
  ) {
    if (!HttpClientService.initInstance) {
      HttpClientService.initInstance = true;

      this.httpService.axiosRef.interceptors.request.use(
        (config) => {
          // todo 这里获取一下后台集群服务的 ip 端口 记录下调用耗时开始
          return config;
        },
        error => {
          return Promise.reject(error);
        },
      );

      this.httpService.axiosRef.interceptors.response.use(
        response => {
          // todo 这里记录下调用耗时 上报下调用成功
          return response;
        },
        error => {
          const { message = '', response } = error;
          // todo 这里上报一下失败
          this.logger.error(message);
          return Promise.reject(response);
        },
      );
    }
  }

  async request(params): Promise<any> {
    const headers: {
      cookie?: string;
    } = {};
    // 这里透传下请求的header
    const requestHeader = this.sessionService.getHeaders();
    // 这里透传下请求的cookie
    headers.cookie = this.sessionService.getCookie();
    // 这里透传下请求的ip
    headers['X-Real-IP'] =
      requestHeader['X-Real-IP'] || requestHeader['x-real-ip'] || '';
    headers['User-Agent'] = `${requestHeader['user-agent']} ServerRender`;
    // 本地调试的时候，这里把请求代理到本地
    if (HttpClientService.config.proxy) {
      params.proxy = HttpClientService.config.proxy;
    }
    return this.httpService.axiosRef({
      ...params,
      headers,
    });
  }
}
