/**
 * @author easonxie
 */
import { Scope } from '@nestjs/common';
import * as querystring from 'querystring';
import { ParsedUrlQuery } from 'querystring';
import { IncomingHttpHeaders } from 'http';

export type SessionServiceType = {
  getQueryData: () => ParsedUrlQuery;
  setQueryData: (string) => void;
  getCookie: () => string;
  setCookie: (string) => void;
  getHeaders: () => IncomingHttpHeaders;
  setHeaders: (headers: IncomingHttpHeaders) => void;
};

/**
 * 全局sessionService，针对每个请求新创建一个，用于传递cookie等信息
 */
export const SessionService = {
  provide: 'SessionService',
  scope: Scope.REQUEST,
  useFactory: () => {
    let cookieData = '';
    let queryData = '';
    let headerData: IncomingHttpHeaders = {};
    return {
      getCookie(): string {
        return cookieData;
      },
      setCookie(str: string): void {
        cookieData = str;
      },
      getQueryData(): ParsedUrlQuery {
        return querystring.parse(queryData);
      },
      setQueryData(str: string): void {
        queryData = str;
      },
      getHeaders(): IncomingHttpHeaders {
        return headerData;
      },
      setHeaders(headers: IncomingHttpHeaders): void {
        headerData = headers;
      },
    };
  },
};
