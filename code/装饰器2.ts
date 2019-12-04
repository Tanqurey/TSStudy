// 下面讲解方法装饰器

/*
方法装饰器会被应用到方法的属性描述符上，可以用来
监视，修改或者替换方法定义。

方法装饰器会在运行时传入下列3个参数
1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
2. 成员的名字
3. 成员的属性描述符
*/

function decorateFn(params: any) {
  return function(target: any, methodName: any, desc: any) {
    console.log(target)
    console.log(methodName)
    console.log(desc)
  }
}
class Client5 {
  constructor() {}

  @decorateFn('xxx')
  getData() {
    // 我是一个实例成员
  }
}

console.log('-------------')

function decorateFn2(params: any) {
  return function(target: any, methodName: any, desc: any) {
    // 方法装饰器为类扩展属性
    target.url = params
    // 扩展方法
    target.work = function() {
      console.log('i am working')
    }
    // 修改装饰器所装饰的方法，使其需要的参数必须为一个string类型
    // 1.保存当前方法
    let originMethod = desc.value
    // 2.替换或修改value
    desc.value = function(data: string) {
      console.log(data)
      console.log('下面输出this:')
      console.log(this)
      // 在替换后的函数执行的同时执行原函数
      originMethod.apply(this)
    }
  }
}
class Client6 {
  constructor() {}

  @decorateFn2('xxx')
  getData() {
    console.log('okok')
    // 我是一个实例成员
  }
}

let client6: any = new Client6()
client6.work()
client6.getData('hhh')

// 方法参数装饰器
/*
参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加
一些元素数据
传入3个参数
1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
2. 参数的名字
3. 参数在函数列表中的索引

*/

function decoreteParam(params:any){
  return function(target:any,paramName:any,index:any){
    console.log(target)
    console.log(paramName)
    console.log(index)
  
  }
}

class Client7 {
  url: any | undefined
  constructor() {}
  getData(@decoreteParam('xxx') data:any) {
    console.log(data)
  }
}

let client7 = new Client7()
client7.getData('yes!!!')


// 4种装饰器的执行顺序
// 属性装饰器=>方法装饰器=>方法参数装饰器(参数内部从后向前)=>类装饰器(多个从后向前)