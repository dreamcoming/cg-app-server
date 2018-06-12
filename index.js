/* eslint-disable */

require('babel-core/register');

if (process.argv[2]) {
  require(process.argv[2]);
} else {
  require('./src/server');
}
