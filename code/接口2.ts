// 接口的扩展，就是接口继承接口

interface Human {
  eat(): void
}

interface Scientist extends Human {
  work(): void
}

class Doctor {
  name: string
  constructor(name: string) {
    this.name = name
  }
  physician(): void {
    console.log(this.name + 'is doing a physician')
  }
}

class Chemist implements Scientist {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {
    console.log(this.name + ' is eating')
  }
  work() {
    console.log(this.name + ' is working')
  }
}

// 实现接口的同时也可以继承类

class Dentist extends Doctor implements Human {
  constructor(name: string) {
    super(name)
  }
  eat() {
    console.log(this.name + ' is eating')
  }
}

let cc = new Chemist('cc')

cc.work()
