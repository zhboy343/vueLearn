// 使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtil.js');

console.log(add(10,20));
console.log(mul(10,10));

// 使用es6的模块化规范
import {name, id} from "./js/info";

console.log(name);
console.log(id);



// webpack打包命令(在src目录下)  webpack .\main.js ..\dist\bundle.js