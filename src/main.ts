import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './service/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  MyLoggerService.useFactory().log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
