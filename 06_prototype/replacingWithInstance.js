// 생성자 함수
function Person(name) {
    this.name = name;
}

// Person의 프로토타입에 메서드 추가
Person.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
};

// 인스턴스 생성
const person1 = new Person('Bob');

// 프로토타입 교체를 위한 새로운 객체
const newPrototype = {
    greet: function() {
        console.log('Updated greeting: Hi there, my name is ' + this.name);
    }
};

// 인스턴스의 프로토타입 교체 (Object.setPrototypeOf 사용)
Object.setPrototypeOf(person1, newPrototype);

// 교체된 프로토타입의 메서드 호출
person1.greet(); // 'Updated greeting: Hi there, my name is Bob'
