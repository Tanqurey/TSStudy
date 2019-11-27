"use strict";
console.log('ok！');
function ok() {
    let ok = 'ok';
    return ok;
}
var flag = false;
var num = 54;
let arr = [1, 2, 3];
let arr2 = ['1', '2', '3'];
let arr3 = [1, 2, 3];
let arr4 = [123, '123'];
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["err"] = 2] = "err";
})(Flag || (Flag = {}));
let s = Flag.success;
console.log(s); //1
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
})(Color || (Color = {}));
let c = Color.red;
console.log(c); //1
let a = 123;
a = '123';
var num2;
console.log(num2);
// 方法没有返回值
function run() {
    console.log('run');
}
var b;
b = (() => {
    throw new Error('wrong');
})();
