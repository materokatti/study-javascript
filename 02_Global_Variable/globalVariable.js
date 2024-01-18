var x = "global";

function hey() {
  console.log(x); // undefined
  var x = "local";
}

hey(); // undefined
console.log(x); // global
