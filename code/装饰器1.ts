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

/*类装饰器：类装饰器在类声明之前被声明(紧靠着类声明)。类装饰器应用
 于构造函数，可以用来监视，修改或替换类定义*/

function decorateClass(params: any): void {
  // 扩展类的功能 params就是当前类的构造函数
  console.log(params)
  // 扩展属性
  params.prototype.name = 'Luke'
  // 扩展方法
  params.prototype.run = function(): void {
    console.log('running')
  }
}

@decorateClass
class Client {
  constructor() {}

  getData() {}
}
let client: any = new Client()
console.log(client.name)

// 装饰器工厂

function decorateClass2(params: string) {
  return function(target: any) {
    // target就是上面的params,指向当前类的构造函数
    console.log(target)
    // 闭包调用参数
    console.log(params)
    target.prototype.username = params
  }
}

@decorateClass2('Linda')
class Client2 {
  constructor() {}

  getData() {}
}
let client2: any = new Client2()
console.log(client2.username)

// 类修饰器重载类的构造函数

/*
类装饰器表达式会在运行所作用的类的构造函数中被调用，
类的构造函数将作为其唯一的参数，
如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
*/

function decorateClass3(target: any) {
  // 该修饰器将重载构造函数
  return class extends target {
    username: string = 'Jennifer'

    getData() {
      console.log(this.username)
    }
  }
}

@decorateClass3
class Client3 {
  username: string | undefined
  constructor() {}

  getData() {
  }
}

let client3 = new Client3()
client3.getData()


/*
属性装饰器会在运行时当做函数被调用，传入下列两个参数：
1.对于静态成员来说是类的构造函数，对于实例对象来说是类的原型对象
2.成员名称
*/
// 类装饰器
function decorateClass4(param:string){
  return function(target:any){

  }
}

// 属性装饰器
function decoratePoperty(param:any){
  return function(target:any,attr:any){
    target[attr] = param
  }
}

@decorateClass4('xxx')
class Client4{
  @decoratePoperty('Jessica')
  username:any|undefined
  constructor(){

  }
  getData(){
    console.log(this.username)
  }
}

new Client4().getData()