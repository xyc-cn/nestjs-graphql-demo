import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { SessionServiceType } from '../service/session.service';
import * as url from 'url';

/**
 * 中间件，设置cookie, 获取请求串
 */
@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(
    @Inject('SessionService') private sessionService: SessionServiceType,
  ) {}
  use(req: Request, res: Response, next: () => void) {
    this.sessionService.setCookie(req.headers.cookie || '');
    this.sessionService.setHeaders(req.headers || {});
    this.sessionService.setQueryData(url.parse(req.url).query || '');
    next();
  }
}
