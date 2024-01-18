// global function
function hey() {
  console.log("global function");
}

function oye() {
  // local function
  function hey() {
    console.log("local function");
  }
  hey();
}

oye();
