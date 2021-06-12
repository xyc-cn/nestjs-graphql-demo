import * as _ from 'lodash';
import config from './config.default';

export default _.merge({}, config, {
  apollo: {
    debug: false,
    introspection: false,
    tracing: false,
    playground: false,
  },
});
