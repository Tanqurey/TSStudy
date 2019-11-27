"use strict";
/*
泛型：在软件工程中，我们不仅要创建一致店小二定义良好的API，同时也要考虑好可重用性。
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你
提供了十分灵活的功能。

像c#和java这样的语言，可以使用泛型来创建可重用的组件，一个组件可以支持多种
类型的数据，这样用户就可以根据自己的数据类型来使用组件

泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持

用T表示泛型
*/
// 泛型函数
function getData(data) {
    return data;
}
// 调用时需要指定类型
console.log(getData('woshishui'));
console.log(getData(123));
// 泛型类
class processClass {
    constructor() {
        this.list = [];
    }
    add(val) {
        this.list.push(val);
    }
    findFirst() {
        return this.list[0];
    }
}
let pc1 = new processClass();
pc1.add(1);
pc1.add(2);
console.log(pc1.findFirst());
let test1 = function (val) {
    return val;
};
test1('李四');
function test2(val) {
    return val;
}
let myFn = getData;
myFn('hello');
