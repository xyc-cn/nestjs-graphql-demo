import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  NestModule,
  Global
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SessionMiddleware } from './middleware/session.middleware';
import { FeedModule } from './graphql/feed/modules/feed.module';
import { HttpClientService } from './service/http.service';
import { MyLoggerService } from './service/logger.service';
import { SessionService } from './service/session.service';
import { MyHttpModule } from './provider/http.module';
import config from './config';

@Global()
@Module({
  imports: [
    FeedModule,
    MyHttpModule.registerGlobal(config.axios), // HttpService的封装,
    GraphQLModule.forRoot(config.apollo),
  ],
  controllers: [],
  providers: [HttpClientService, HttpClientService, MyLoggerService, SessionService],
  exports: [HttpClientService, HttpClientService, MyLoggerService, SessionService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      // 添加中间件，写入cookie到sessionService
      .apply(SessionMiddleware)
      .forRoutes({ path: '/graphql', method: RequestMethod.POST });
  }
}
