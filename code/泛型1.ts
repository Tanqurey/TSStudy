/*
泛型：在软件工程中，我们不仅要创建一致定义良好的API，同时也要考虑好可重用性。
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你
提供了十分灵活的功能。

像c#和java这样的语言，可以使用泛型来创建可重用的组件，一个组件可以支持多种
类型的数据，这样用户就可以根据自己的数据类型来使用组件

泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持

用T表示泛型
*/

// 泛型函数
function getData<T>(data: T): T {
  return data
}

// 调用时需要指定类型
console.log(getData<string>('woshishui'))
console.log(getData<number>(123))

// 泛型类

class processClass<T> {
  public list: T[] = []
  add(val: T): void {
    this.list.push(val)
  }
  findFirst(): T {
    return this.list[0]
  }
}

let pc1 = new processClass<number>()
pc1.add(1)
pc1.add(2)
console.log(pc1.findFirst())

// 泛型接口的定义方法1
interface ConfigFn {
  <T>(val: T): T
}

let test1: ConfigFn = function<T>(val: T): T {
  return val
}
test1<string>('李四')

// 泛型接口的定义方法2
interface ConfigFn2<T> {
  (val: T): T
}

function test2<T>(val: T): T {
  return val
}

let myFn: ConfigFn2<string> = test2
myFn('hello')