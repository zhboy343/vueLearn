// 合并webpack--需要下载 npm install webpack-merge
const webpackMerge = require('webpack-merge');
const uglifyjsWebPackPlugin = require('uglifyjs-webpack-plugin')
// 基础配置
const baseConfig = require('./webpack.base.config')

module.exports = webpackMerge(baseConfig , {
  plugins: [
    // js代码压缩--使用这个后会删除js中的注释(使用BannerPlugin添加的声明也会被删除)
    new uglifyjsWebPackPlugin()
  ]
})