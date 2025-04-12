function helper() {
  var n = 1; 
  console.log(n);
  function checkNum() {
    console.log(n);
  }
  n++;
  return checkNum;
}

var res = helper();
res();