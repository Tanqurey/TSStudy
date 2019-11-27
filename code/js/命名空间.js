"use strict";
/*
命名空间: 代码量较大的情况下，为了避免各种变量命名冲突，可将相似功能的函数，
类，接口等放置到命名空间内。
类似java,.net当中的包，ts中的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象

命名空间和模块的区别:
  命名空间：内部模块，主要用于组织代码，避免命名冲突
  模块: ts的外部模块的简称，侧重代码的复用，一个模块内可能存在多个命名空间
*/
Object.defineProperty(exports, "__esModule", { value: true });
// 命名空间是私有的
var mySpace;
(function (mySpace) {
    class Chick {
    }
    mySpace.Chick = Chick;
})(mySpace || (mySpace = {}));
let chick = new mySpace.
    Chick();
// 引入模块
const module_1 = require("./module/module");
let lamb = new module_1.mySpace3.Lamb();
