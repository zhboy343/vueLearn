const path = require('path')

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
        publicPath: 'dist/'
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
          }
        ]
    }
}