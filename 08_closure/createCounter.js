function createCounter() {
  let count = 0; 

  return {
    increment: function() {
      count += 1;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();

// 카운터 사용 예시:
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
