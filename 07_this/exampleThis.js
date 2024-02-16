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

// 5. this in event listener

const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this); // <button>Click me</button>
});

// 6. this in arrow function

const arrowFunction = () => {
  return this;
};
