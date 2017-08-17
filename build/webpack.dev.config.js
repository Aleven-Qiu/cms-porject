//开发环境
var webpack = require('webpack')
var config = require('./webpack.base.config')
// dev配置
config.devServer= {
    hot: true,
    inline: true,
    proxy: {
      "/": {
          target: 'http://test.scm.morning-star.cn/',
          secure: false
      },
    }
}
config.devtool = '#source-map'
module.exports = config