/*
接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作规范。
在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部
状态数据，也不关心这些类里面方法的实现细节，它只规定这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要。ts中的接口类似java，同时还增加了更灵活的接口类型，包括属性，函数，可索引和类等
接口是行为和动作的规范，对批量方法进行约束
*/

// 属性接口 对json对象的约束

interface FullName {
  // 必须加分号
  firstName: string
  lastName: string
}

function print1(name: FullName): void {
  // 用属性接口限制参数类型
  console.log(`${name.firstName} ${name.lastName}`)
}

// 建议严格按照接口定义，下面的age属性时不规范的
let obj = { firstName: 'cc', lastName: 'ee', age: 24 }

print1(obj)

// 接口的可选属性

interface Student {
  name: string
  // score是可选属性
  score?: number
}

// 举例：使用接口封装一个ajax方法所需要的参数json对象。请定义属性接口

interface ajaxParamObj {
  type: string
  url: string
  data?: string
  dataType: string
}

// 下面讲解函数类型接口：对函数传入的参数以及返回值进行约束

interface Test {
  // 限定参数类型，返回值类型
  (name: string, age: number): string
}

let print2: Test = function(stuName: string, stuAge: number): string {
  return 'my prpfile' + stuName + stuAge
}

console.log(print2('cc', 12))

// 可索引的接口：数组或对象的约束(不常用

interface StuArr {
  //索引类型，值类型
  [index: number]: string
}

let stu: StuArr = ['cc', 'ee', 'ff']

interface Food {
  //索引类型，值类型
  [index: string]: number
}

let dessert: Food = {
  iceCream: 10,
  donuts: 50
}

// 类类型接口是对类的约束，和抽象类有些类似

interface Sports {
  name: string
  doIt(sport: string): void
}

// 使用implements 实现接口

class football implements Sports {
  name: string
  constructor(name: string) {
    this.name = name
  }
  doIt(): void {
    console.log(this.name+'正在玩足球')
  }
}

let f = new football('linda')
f.doIt()
