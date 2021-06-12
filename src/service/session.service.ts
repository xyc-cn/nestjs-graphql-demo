/**
 * @author easonxie
 */
import { Scope } from '@nestjs/common';
import * as querystring from 'querystring';
/**
 * 全局sessionService，针对每个请求新创建一个，用于传递cookie等信息
 */
export const SessionService = {
  provide: 'SessionService',
  scope: Scope.REQUEST,
  useFactory: () => {
    let cookieData = '';
    let queryData = '';
    let headerData: { [name: string]: string } = {};
    return {
      getCookie() {
        return cookieData;
      },
      setCookie(str: string) {
        cookieData = str;
      },
      getQueryData(name: string, allData?: boolean) {
        const query = querystring.parse(queryData);
        if (allData) {
          return querystring.parse(queryData);
        } else {
          return query[name] || '';
        }
      },
      setQueryData(str: string) {
        queryData = str;
      },
      getHeaders() {
        return headerData;
      },
      setHeaders(obj: { [name: string]: string }) {
        headerData = obj;
      },
    };
  },
};
export type SessionServiceType = {
  getQueryData: (
    name: string,
    allData?: boolean,
  ) => string | { [name: string]: string };
  setQueryData: (string) => void;
  getCookie: () => string;
  setCookie: (string) => void;
  getHeaders: () => { [name: string]: string };
  setHeaders: (object) => void;
};
