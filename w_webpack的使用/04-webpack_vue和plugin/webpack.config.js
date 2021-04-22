const path = require('path')
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebPackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',  //  设置入口
    output: {   //  设置出口
        // 这里需要全路径--动态获取
        // path.resolve--字符串拼接
        // __dirname全局变量--当前文件所在路径(绝对路径)
        path: path.resolve(__dirname,'dist'), 
        filename: 'bundle.js',
        // 会在使用url时，在路径前加上 dist/ (一般访问静态资源时用到:例如下file-loader 大图片打包完后的访问)
        // 当index.html在dist文件夹里面时,则直接访问,此时不需要该配置
        // publicPath: 'dist/'
    },
    module: {
        rules: [
          // 配置css
          {
            test: /\.css$/,
            // css-loader只负责加载css文件
            // style-loader将样式添加到 DOM 中
            // 使用多个loader时,从右向左加载(所以style-loader写在左侧后加载)
            use: [ 'style-loader', 'css-loader' ]
          },
          // 配置less
          {
            test: /\.less$/,
            use:[
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'less-loader'
              }
            ]
          },
          // 配置url
          {
            test: /\.(png|jpg|gif|jpeg)$/, // 匹配文件后缀类型
            use: [
              {
                loader: 'url-loader',
                options: {
                  // 当加载的图片，小于limit设置时，会将图片编译成base64字符串形式
                  // 当图片大于limit时，会将图片一起打包在dist目录下(此时需要file-loader)
                  limit: 8196,

                  // 对需要打包的图片进行命名
                  /*
                    img ：文件要打包到的文件夹(多层目录用/间隔)、
                    name ：获取图片原来名称
                    hash:8 ：防止图片重名冲突，添加hash值，但只保留8为hash值
                    ext ：使用图片原来的扩展名 
                  */
                  name: 'img/[name].[hash:8].[ext]'
                },
                
              }
            ]
          },
          // 配置babel--用于转换js 如:将es6语法打包时转换为es5语法 防止浏览器无法识别
          {
            test: /\.js$/,
            // exclude 排除
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          // 配置vue
          {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
          }
        ]
    },
    resolve: {
      // 设置那些文件引入时可以省略后缀
      extensions: ['.js', '.css', '.vue'],
      // alias 别名
      alias: {
        // 当使用import Vue时, 引入配置路径指定的文件
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    // webpack扩展功能(非内置的需要下载)
    plugins: [
      // 添加声明(最终在打包的js最上显示)
      new webpack.BannerPlugin("版权归zh索引"),
      // 使index.html打包,会自动引入打包的js--(使用这个后，url地址前不用再添加dist地址)
      new htmlWebpackPlugin({
        template: 'index.html'  // 打包模板
      }),
      // js代码压缩--使用这个后会删除js中的注释(使用BannerPlugin添加的声明也会被删除)
      new uglifyjsWebPackPlugin()
    ]
}