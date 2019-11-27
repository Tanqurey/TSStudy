// es5中常用的是用function构造一个类

//ts中使用class关键字定义一个类

class Person {
  name: string // 属性：类型，省略了public关键字
  constructor(name: string) {
    //实例化对象时触发
    this.name = name
  }
  run(): void {
    console.log('run' + this.name)
  }
}

let p = new Person('cc')
p.run()

//ts中的继承
// 主要使用extend和super关键字
class Student extends Person {
  constructor(name: string) {
    super(name) // 表示调用父类构造函数
  }
  work(): void {
    console.log('work' + this.name)
  }
  run(): void {
    console.log('run' + this.name + '子类')
  }
}
let lisa = new Student('Lisa')
lisa.run()

// ts中父类方法和子类方法一致,子类内可以重写父类同名的方法

// 类内的修饰符，在类内定义属性时，ts提供了3种修饰符

/*
  public :公有属性。该属性在类内，类外，子类(包括子类方法)都可以被访问
  protected:保护类型。该属性仅在类内和子类可以访问
  private： 私有属性，仅在当前类内可以访问

  属性不加修饰符时，默认为公有
*/

class Farther1 {
  public name: string
  protected age: number
  private money: number
  constructor(name: string, age: number, money: number) {
    this.name = name
    this.age = age
    this.money = money
  }
  run1(): void {
    console.log(`${this.name} is running`)
  }
  run2(): void {
    console.log(`${this.age} is running`)
  }
  run3(): void {
    console.log(`${this.money} is running`)
  }
}

class Son1 extends Farther1 {
  constructor(name: string, age: number, money: number) {
    super(name, age, money)
  }
  run3(): void {
    // console.log(`${this.money} is running`) //私有属性，报错
  }
}

let john = new Farther1('john', 44, 10000)
let johnson = new Son1('johnson', 14, 500)

console.log(john.name) // 类外使用
john.run1() // 类内使用

john.run2() // 类内使用
johnson.run2() //子类使用
// console.log(john.age) // 类外使用,报错
