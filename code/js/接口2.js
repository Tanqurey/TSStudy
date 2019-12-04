"use strict";
// 接口的扩展，就是接口继承接口
class Doctor {
    constructor(name) {
        this.name = name;
    }
    physician() {
        console.log(this.name + 'is doing a physician');
    }
}
class Chemist {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + ' is eating');
    }
    work() {
        console.log(this.name + ' is working');
    }
}
// 实现接口的同时也可以继承类
class Dentist extends Doctor {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(this.name + ' is eating');
    }
}
let cc = new Chemist('cc');
cc.work();
