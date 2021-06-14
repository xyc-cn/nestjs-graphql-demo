import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import config from './config';

const logger = WinstonModule.createLogger({
  transports: config.logger
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger
  })
  await app.listen(3000);
  logger.log('application start listen on port 3000')
}

bootstrap().then().catch((e)=>{
  logger.error(e)
});
