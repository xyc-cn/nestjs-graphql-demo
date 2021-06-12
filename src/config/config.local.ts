import * as _ from 'lodash';
import config from './config.default';

export default _.merge({}, config, {
  httpClient: {
    // 代理服务端的http到本地的8899端口
    // proxy: {
    //   port: '8899',
    // },
  },
  local: true,
  apollo: {
    debug: false,
  },
});
