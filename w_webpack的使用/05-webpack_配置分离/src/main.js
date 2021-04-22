// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtil.js');
// 2.依赖css文件，这样index.html只需要引入一个文件就行
// 需要安装css对应loader
require("./css/cs1.css")

console.log(add(10,20));
console.log(mul(10,10));

// 3.使用es6的模块化规范
import {name, id} from "./js/info";

console.log(name);
console.log(id);

// 4.依赖less文件
require("./css/les.less")

// 5.使用vue进行开发
import Vue from 'vue'
import Bpp from './vue/bpp.js'
// import Cpp from './vue/cpp.vue'
import Cpp from './vue/cpp'

const Epp = {
    template: `
        <div>
            <h4>{{message}}</h4>
        </div>
    `,
    data() {
        return {
            message: '子组件1'
        }
    }
}

new Vue({
    el: '#app',
    template: `
        <div>
            <h4>主组件</h4>
            <Epp/>
            <Bpp/>
            <Cpp>
        </div>
    `,
    components: {
        Epp,
        Bpp,
        Cpp
    }
})

// webpack打包命令(在src目录下)  webpack .\main.js ..\dist\bundle.js