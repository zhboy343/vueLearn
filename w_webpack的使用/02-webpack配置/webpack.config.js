const path = require('path')

module.exports = {
    entry: './src/main.js',  //  设置入口
    output: {   //  设置出口
        // 这里需要全路径--动态获取
        // path.resolve--字符串拼接
        // __dirname全局变量--当前文件所在路径(绝对路径)
        path: path.resolve(__dirname,'dist'), 
        filename: 'bundle.js'
    },
}