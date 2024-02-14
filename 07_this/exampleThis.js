// 1. this in global scope

console.log(this); // Window

// 2. this in function

function whatIsThis() {
  return this;
}

console.log(whatIsThis()); // Window

// 3. this in object

const person = {
  name: "John",
  sayHi() {
    return this;
  },
};

console.log(person.sayHi()); // {name: "John", sayHi: ƒ}

// 4. this in constructor

function Person(name) {
  this.name = name;
  this.sayHi = function () {
    return this;
  };
}

const john = new Person("John");
console.log(john.sayHi()); // {name: "John", sayHi: ƒ}
