import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  NestModule,
  Logger,
  Global
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SessionMiddleware } from './middleware/session.middleware';
import { FeedModule } from './graphql/feed/modules/feed.module';
import { HttpClientService } from './service/http.service';
import { SessionService } from './service/session.service';
import { MyHttpModule as HttpModule } from './provider/http.module';
import config from './config';

@Global()
@Module({
  imports: [
    FeedModule,
    // HttpService的封装,全局暴露不用到处注入
    HttpModule.registerGlobal(config.axios),
    GraphQLModule.forRoot(config.apollo),
  ],
  controllers: [],
  providers: [HttpClientService, SessionService, Logger],
  exports: [HttpClientService, SessionService, Logger],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      // 添加中间件，写入cookie到sessionService
      .apply(SessionMiddleware)
      .forRoutes({ path: '/graphql', method: RequestMethod.POST });
  }
}
