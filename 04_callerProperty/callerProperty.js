function hey(func) {
  return func;
}

function hola() {
  return "caller :" + hola.caller;
}

console.log(hey(hola));
console.log(hola());
