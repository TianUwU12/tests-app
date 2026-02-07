// console.log("0");

// setTimeout(() => {
//   console.log("1");
// }, 0);

// console.log("2");

function dummyFunction(moreDummyFunction) {
  moreDummyFunction();
}

dummyFunction(() => console.log("hello"));

// const promise = new Promise((resolve, reject) => {
//   //...
//   const rand = Math.random() > 0.5;
//   if (rand) {
//     resolve("success");
//   } else {
//     reject("error");
//   }
// });

// let legs = 41;
// let name = 4;

// class Animal {
//   constructor(legs, tail, name) {
//     this.legs = legs;
//     this.tail = tail;
//     this.name = name;
//   }

//   makeSound() {
//     console.log(this.name);
//   }
// }

// const dog = new Animal(4, 1, "Bobik");

// dog.makeSound();

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  work() {}

  getSalary() {}
}

class Visitor {
  constructor(name) {
    this.name = name;
  }

  buy(money) {}

  visitOffice(money) {}
}

const oleg = new Visitor("Oleg");

oleg.buy(1000);

oleg.visitOffice(2000);
