/**
 * @author easonxie
 */
import { Scope } from '@nestjs/common';
import config from '../config';

/**
 */
export const MyLoggerService = {
  provide: 'MyLoggerService',
  scope: Scope.DEFAULT,
  useFactory: () => {
    if (config.env !== 'local') {
      // todo 指定其他日志
      return console;
    } else {
      return console;
    }
  },
};

export type MyLoggerServiceType = {
  [name: string]: any;
};
