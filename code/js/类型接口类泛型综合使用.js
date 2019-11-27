"use strict";
/*
定义一个操作数据库的库，支持Mysql Mssql Mongodb

约束统一的规范，实现代码重用

约束规范所以要规范的定义
*/
// 要实现一个泛型接口，这个类也要是一个泛型类
class MysqlDb {
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    get(id) {
        throw new Error('Method not implemented.');
    }
}
class MsSqlDb {
    add(info) {
        throw new Error('Method not implemented.');
    }
    update(info, id) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    get(id) {
        throw new Error('Method not implemented.');
    }
}
// 定义一个User类
class User2 {
}
let u = new User2();
u.password = '123456';
u.username = 'lisa';
let oMysql = new MysqlDb();
oMysql.add(u);
