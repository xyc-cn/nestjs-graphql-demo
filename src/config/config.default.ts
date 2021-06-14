import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

export default {
  listen: {
    port: 8000,
  },
  apollo: {
    autoSchemaFile: true,
    debug: false,
    tracing: true,
    playground: {
      settings: {
        'request.credentials': 'include',
      },
    },
    sortSchema: true,
  },
  logger: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
    new winston.transports.File({
      filename: 'logs/info.log',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
    new winston.transports.File({
      filename: 'logs/warn.log',
      level: 'warn',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
  ]
};
