"use strict";
/*
接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作规范。
在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部
状态数据，也不关心这些类里面方法的实现细节，它只规定这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要。ts中的接口类似java，同时还增加了更灵活的接口类型，包括属性，函数，可索引和类等
接口是行为和动作的规范，对批量方法进行约束
*/
function print1(name) {
    // 用属性接口限制参数类型
    console.log(`${name.firstName} ${name.lastName}`);
}
// 建议严格按照接口定义，下面的age属性时不规范的
let obj = { firstName: 'cc', lastName: 'ee', age: 24 };
print1(obj);
let print2 = function (stuName, stuAge) {
    return 'my prpfile' + stuName + stuAge;
};
console.log(print2('cc', 12));
let stu = ['cc', 'ee', 'ff'];
let dessert = {
    iceCream: 10,
    donuts: 50
};
// 使用implements 实现接口
class football {
    constructor(name) {
        this.name = name;
    }
    doIt() {
        console.log(this.name + '正在玩足球');
    }
}
let f = new football('linda');
f.doIt();
