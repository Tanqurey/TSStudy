"use strict";
// 下面讲解方法装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
方法装饰器会被应用到方法的属性描述符上，可以用来
监视，修改或者替换方法定义。

方法装饰器会在运行时传入下列3个参数
1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
2. 成员的名字
3. 成员的属性描述符
*/
function decorateFn(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc);
    };
}
class Client5 {
    constructor() { }
    getData() {
        // 我是一个实例成员
    }
}
__decorate([
    decorateFn('xxx')
], Client5.prototype, "getData", null);
console.log('-------------');
function decorateFn2(params) {
    return function (target, methodName, desc) {
        // 方法装饰器为类扩展属性
        target.url = params;
        // 扩展方法
        target.work = function () {
            console.log('i am working');
        };
        // 修改装饰器所装饰的方法，使其需要的参数必须为一个string类型
        // 1.保存当前方法
        let originMethod = desc.value;
        // 2.替换或修改value
        desc.value = function (data) {
            console.log(data);
            console.log('下面输出this:');
            console.log(this);
            // 在替换后的函数执行的同时执行原函数
            originMethod.apply(this);
        };
    };
}
class Client6 {
    constructor() { }
    getData() {
        console.log('okok');
        // 我是一个实例成员
    }
}
__decorate([
    decorateFn2('xxx')
], Client6.prototype, "getData", null);
let client6 = new Client6();
client6.work();
client6.getData('hhh');
// 方法参数装饰器
/*
参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加
一些元素数据
传入3个参数
1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
2. 参数的名字
3. 参数在函数列表中的索引

*/
function decoreteParam(params) {
    return function (target, paramName, index) {
        console.log(target);
        console.log(paramName);
        console.log(index);
    };
}
class Client7 {
    constructor() { }
    getData(data) {
        console.log(data);
    }
}
__decorate([
    __param(0, decoreteParam('xxx'))
], Client7.prototype, "getData", null);
let client7 = new Client7();
client7.getData('yes!!!');
// 4种装饰器的执行顺序
// 属性装饰器=>方法装饰器=>方法参数装饰器(参数内部从后向前)=>类装饰器(多个从后向前)
