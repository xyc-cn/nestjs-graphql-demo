import * as _ from 'lodash';
import config from './config.default';

export default _.merge({}, config, {
  isTest: true,
  apollo: {
    autoSchemaFile: true,
    debug: true,
    tracing: true,
    playground: {
      settings: {
        'request.credentials': 'include',
      },
    },
  },
});
