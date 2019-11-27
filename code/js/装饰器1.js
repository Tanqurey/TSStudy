"use strict";
/*
装饰器：是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，
可以修改类的行为。通俗来讲，装饰器就是一种方法，可以注入到类，方法，属性参数
上来扩展类，属性，方法，参数的功能。
常见额装饰器有：
类装饰器，属性装饰器，方法装饰器，参数装饰器
装饰器的写法:
普通装饰器(无法传参)
装饰器工厂(可传参)
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*类装饰器：类装饰器在类声明之前被声明(紧靠着类声明)。类装饰器应用
 于构造函数，可以用来监视，修改或替换类定义*/
function decorateClass(params) {
    // 扩展类的功能 params就是当前类的构造函数
    console.log(params);
    // 扩展属性
    params.prototype.name = 'Luke';
    // 扩展方法
    params.prototype.run = function () {
        console.log('running');
    };
}
let Client = class Client {
    constructor() { }
    getData() { }
};
Client = __decorate([
    decorateClass
], Client);
let client = new Client();
console.log(client.name);
// 装饰器工厂
function decorateClass2(params) {
    return function (target) {
        // target就是上面的params,指向当前类的构造函数
        console.log(target);
        // 闭包调用参数
        console.log(params);
        target.prototype.username = params;
    };
}
let Client2 = class Client2 {
    constructor() { }
    getData() { }
};
Client2 = __decorate([
    decorateClass2('Linda')
], Client2);
let client2 = new Client2();
console.log(client2.username);
// 类修饰器重载类的构造函数
/*
类装饰器表达式会在运行所作用的类的构造函数中被调用，
类的构造函数将作为其唯一的参数，
如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
*/
function decorateClass3(target) {
    // 该修饰器将重载构造函数
    return class extends target {
        constructor() {
            super(...arguments);
            this.username = 'Jennifer';
        }
        getData() {
            console.log(this.username);
        }
    };
}
let Client3 = class Client3 {
    constructor() { }
    getData() {
    }
};
Client3 = __decorate([
    decorateClass3
], Client3);
let client3 = new Client3();
client3.getData();
/*
属性装饰器会在运行时当做函数被调用，传入下列两个参数：
1.对于静态成员来说是类的构造函数，对于实例对象来说是类的原型对象
2.成员名称
*/
// 类装饰器
function decorateClass4(param) {
    return function (target) {
    };
}
// 属性装饰器
function decoratePoperty(param) {
    return function (target, attr) {
        target[attr] = param;
    };
}
let Client4 = class Client4 {
    constructor() {
    }
    getData() {
        console.log(this.username);
    }
};
__decorate([
    decoratePoperty('Jessica')
], Client4.prototype, "username", void 0);
Client4 = __decorate([
    decorateClass4('xxx')
], Client4);
new Client4().getData();
