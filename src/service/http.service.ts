import { HttpService, Inject, Injectable, Scope } from '@nestjs/common';
import config from '../config';
import { SessionServiceType } from './session.service';
import { MyLoggerServiceType } from './logger.service';
import { AxiosRequestConfig } from 'axios';
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
    @Inject('MyLoggerService') private logger: MyLoggerServiceType,
  ) {
    if (!HttpClientService.initInstance) {
      HttpClientService.initInstance = true;

      this.httpService.axiosRef.interceptors.request.use(
        (config): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
          return config;
        },
        error => {
          return Promise.reject(error);
        },
      );

      this.httpService.axiosRef.interceptors.response.use(
        response => {
          return response;
        },
        error => {
          const { message = '', response } = error;
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
    const requestHeader = this.sessionService.getHeaders();
    headers.cookie = this.sessionService.getCookie();
    headers['X-Real-IP'] =
      requestHeader['X-Real-IP'] || requestHeader['x-real-ip'] || '';
    headers['User-Agent'] = `${requestHeader['user-agent']} ServerRender`;
    if (HttpClientService.config.proxy) {
      params.proxy = HttpClientService.config.proxy;
    }
    return this.httpService.axiosRef({
      ...params,
      headers,
    });
  }
}
