var x = 1;

function hey() {
  var x = 2;
  oye();
}

function oye() {
  console.log(x);
}

hey(); // 1
oye(); // 1
