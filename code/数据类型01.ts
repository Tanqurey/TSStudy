console.log('ok！')

function ok() {
  let ok = 'ok'
  return ok
}

var flag: boolean = false
var num: number = 54

let arr: number[] = [1, 2, 3]
let arr2: string[] = ['1', '2', '3']
let arr3: Array<number> = [1, 2, 3]

let arr4: [number, string] = [123, '123']

enum Flag {
  success = 1,
  err = 2
}

let s: Flag = Flag.success
console.log(s) //1

enum Color {
  blue,
  'red'
}
let c: Color = Color.red
console.log(c) //1

let a: any = 123
a = '123'

var num2: number | null | undefined
console.log(num2)

// 方法没有返回值
function run(): void {
  console.log('run')
}

var b: never
b = (() => {
  throw new Error('wrong')
})()
