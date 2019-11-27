"use strict";
// ts类内的静态属性与静态方法
// 在es5中我们可以直接使用类名.直接点出静态方法
// 使用static关键字
class Test1 {
    constructor() {
    }
    static run() {
        // 静态方法无法调用类内实例属性，只能调用静态属性
        console.log('running');
    }
    static giveScore() {
        // 静态方法无法调用类内实例属性，只能调用静态属性
        console.log(this.score);
    }
}
Test1.score = 100;
Test1.run();
Test1.giveScore();
// 下面讲解多态
// 多态就是父类定义了一个方法但没有实现，让继承它的子类去实现，每一子类都有不同的表现
// 多态也属于继承的表现
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('吃');
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        // 重写
        console.log(this.name + ' eat meat');
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(this.name + ' eat fish');
    }
}
let kitty = new Cat('Kitty');
kitty.eat();
// 下面讲解抽象
/*
ts中的抽象类提供其他类继承的基类，不可以被直接实例化。
用abstract关键字来定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现，必须在派生类中实现
abstract抽象方法只能放在抽象类内
所以抽象类与抽象方法常用于定义标准
*/
class Standard {
    constructor(name) {
        this.name = name;
    }
}
class Product extends Standard {
    constructor(name) {
        super(name);
    }
    report() {
        console.log(`this product's name is ${this.name}`);
    }
}
let tv = new Product('tv');
tv.report();
