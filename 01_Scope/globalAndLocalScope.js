// global scope
var hey = "This is a global variable";

function globalFunction() {
  // local scope
  var hey = "This is a local variable";
  console.log(hey);
}

globalFunction();
console.log(hey);
