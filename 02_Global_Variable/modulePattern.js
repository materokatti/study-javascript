var Counter = (function () {
  // private variable
  var num = 0;
  // public methods
  return {
    increase: function () {
      return ++num;
    },
    decrease: function () {
      return --num;
    },
  };
})();

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.num); // undefined
