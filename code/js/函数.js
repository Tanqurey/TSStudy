"use strict";
// 函数的定义
//需要给函数的参数和返回值指定类型
//函数声明：
function run1() {
    return '123';
}
//函数表达式:
var run2 = () => {
    return '123';
};
var run3 = function () {
    return '123';
};
//调用方法
run1();
// 定义方法传参类型
function getInfo(name, age) {
    return `${name}---${age}`;
}
// 函数表达式
let test = (name, age) => {
    return `${name}---${age}`;
};
// 没有返回值的方法
function test5(name) {
    console.log(name);
}
// 含有可选参数的方法
// es5内的实参与形参可以不一样，但是在ts中必须一致，否则就需要设定可选参数
// 使用问号标记可选参数，可选参数必须配置在参数列表末尾
function test3(name, age, sex) {
    console.log(name);
}
// 设置默认参数,用=设置
function test4(name, age = 20) {
    console.log(name);
}
// 剩余参数
// 类似es6中的...，用于接收不确定的形参,储存在数组中
function sum(...numbers) {
    return numbers[0];
}
function run4(val) {
    if (typeof val == 'string') {
        return '名字';
    }
    else {
        return 123;
    }
}
function run5(name, age) {
    if (age) {
        return 123;
    }
    else {
        return 'name';
    }
}
