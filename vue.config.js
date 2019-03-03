const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '~~~': resolve('src/assets'),
        "@": path.resolve(__dirname, 'src')

      }
    }
  }
}
// eslint-disable-next-line
/* eslint-disable */