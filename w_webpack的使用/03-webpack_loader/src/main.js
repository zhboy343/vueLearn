// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtil.js');
// 依赖css文件，这样index.html只需要引入一个文件就行
// 需要安装css对应loader
require("./css/cs1.css")

console.log(add(10,20));
console.log(mul(10,10));

// 2.使用es6的模块化规范
import {name, id} from "./js/info";

console.log(name);
console.log(id);

// 3.依赖less文件
require("./css/les.less")

// webpack打包命令(在src目录下)  webpack .\main.js ..\dist\bundle.js