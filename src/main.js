// 项目的JS入口文件

console.log('ok')
import './css/index.css'
import './css/index.less'
import './css/index.scss'

// class关键字 ES6语法 实现面向编程

class Person {

    // 使用static关键字 定义静态属性(可以直接通过类名直接访问的属性) 实力属性(只能通过类的实例来访问的属性)
    static info = {name:'Yoona',age:28};
}

console.log(Person.info)
// var p1 = new Person()
// p1.name// 实例属性

import Vue from 'vue';

import Login from './login.vue';

new Vue({
    el:'#app',
    render: c => c(Login)
})
