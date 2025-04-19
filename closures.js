function outer() {
  let password = 'xyz124';
  function closureFun(pass) {
    return pass === password;
  }
  return closureFun;
}

let res = outer();
console.log(res('xyz1224'));

//example2
function helper() {
  let a = 4;
  function innerHelper() {
    return a * a;
  }
  return innerHelper; 
}

let res2 = helper();
console.log(res2());