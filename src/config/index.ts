import prodConfig from './config.prod';
import testConfig from './config.test';
import localConfig from './config.local';
const nodeEnv = process.env.NODE_ENV;

let exportConfig;

if (nodeEnv === 'production') {
  exportConfig = prodConfig;
} else if (nodeEnv === 'test') {
  exportConfig = testConfig;
} else {
  exportConfig = localConfig;
}

const resultExport = {
  ...exportConfig,
  env: nodeEnv,
};
export default resultExport;
