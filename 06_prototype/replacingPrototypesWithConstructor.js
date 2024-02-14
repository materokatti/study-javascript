// 생성자 함수
function Person(name) {
    this.name = name;
}

// Person의 프로토타입에 메서드 추가
Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
};

// 프로토타입 교체를 위한 새로운 객체
const newPrototype = {
    greet: function() {
        console.log('New greeting: Hi, my name is ' + this.name);
    }
};

// 생성자 함수의 프로토타입 교체
Person.prototype = newPrototype;

// 인스턴스 생성
const person1 = new Person('Alice');

// 교체된 프로토타입의 메서드 호출
person1.greet(); // 'New greeting: Hi, my name is Alice'
