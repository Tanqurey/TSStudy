// 深入讲解泛型类

// 类作为参数的泛型类

/*
定义一个类，把类作为参数来约束数据传入的类型
*/

// User类用于映射数据库字段
// Db类用于操作数据库
// 把User作为参数传入到Db中

class User {
  username: string | undefined
  password: string | undefined
}

class Db {
  add(user: User): boolean {
    console.log(user)
    return true
  }
}

// 但是如果要对不止user一类的数据进行校验，就要书写大量冗余代码了

class Db2<T> {
  add(info: T): boolean {
    console.log(info)
    return true
  }
}

let myDb = new Db2<User>()
