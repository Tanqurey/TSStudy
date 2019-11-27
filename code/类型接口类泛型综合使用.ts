/*
定义一个操作数据库的库，支持Mysql Mssql Mongodb

约束统一的规范，实现代码重用

约束规范所以要规范的定义
*/

interface DBP<T> {
  add(info: T): boolean
  update(info: T, id: string): boolean
  delete(id: string): boolean
  get(id: string): any[]
}

// 要实现一个泛型接口，这个类也要是一个泛型类

class MysqlDb<T> implements DBP<T> {
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, id: string): boolean {
    throw new Error('Method not implemented.')
  }
  delete(id: string): boolean {
    throw new Error('Method not implemented.')
  }
  get(id: string): any[] {
    throw new Error('Method not implemented.')
  }
}

class MsSqlDb<T> implements DBP<T> {
  add(info: T): boolean {
    throw new Error('Method not implemented.')
  }
  update(info: T, id: string): boolean {
    throw new Error('Method not implemented.')
  }
  delete(id: string): boolean {
    throw new Error('Method not implemented.')
  }
  get(id: string): any[] {
    throw new Error('Method not implemented.')
  }
}

// 定义一个User类

class User2 {
  username: string | undefined
  password: string | undefined
}

let u = new User2()
u.password = '123456'
u.username = 'lisa'

let oMysql = new MysqlDb<User2>()
oMysql.add(u)
