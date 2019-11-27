// 函数的定义

//需要给函数的参数和返回值指定类型

//函数声明：
function run1(): string {
  return '123'
}

//函数表达式:
var run2 = (): string => {
  return '123'
}

var run3 = function(): string {
  return '123'
}

//调用方法
run1()

// 定义方法传参类型

function getInfo(name: string, age: number): string {
  return `${name}---${age}`
}

// 函数表达式

let test = (name: string, age: number): string => {
  return `${name}---${age}`
}

// 没有返回值的方法

function test5(name: string): void {
  console.log(name)
}

// 含有可选参数的方法

// es5内的实参与形参可以不一样，但是在ts中必须一致，否则就需要设定可选参数

// 使用问号标记可选参数，可选参数必须配置在参数列表末尾

function test3(name: string, age?: number, sex?: string): void {
  console.log(name)
}

// 设置默认参数,用=设置

function test4(name: string, age: number = 20): void {
  console.log(name)
}

// 剩余参数

// 类似es6中的...，用于接收不确定的形参,储存在数组中

function sum(...numbers: number[]): number {
  return numbers[0]
}

// 类似的,...前也可以有别的参数，但...必须是最后一个形参

// 函数重载
// js中不存在函数重载

// java中的重载：指为两个或以上同名函数，参数不同时，出现的函数重载的情况
// ts中的重载就是为同一个函数提供多个函数类型定义来实现多种功能的目的

// ts为了兼容es5及es6，重载与java有区别

// es5中没有重载，同名直接覆盖

// ts中的重载

function run4(name: string): string
function run4(age: number): number
function run4(val: any): any {
  if (typeof val == 'string') {
    return '名字'
  } else {
    return 123
  }
}

// 以上就是所谓的‘重载’

// 参数个数不同时也可以进行重载

function run5(name: string): string
function run5(name: string, age: number): number
function run5(name: any, age?: any): any {
  if(age){
    return 123
  }else{
    return 'name'
  }
}
