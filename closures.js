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

//example3

function helper2() {
  let cnt = 0;
  function innerHelper() {
    cnt += 1;
    cnt += 2;
    return cnt;
  }
  return innerHelper; 
}

let res3 = helper2(); 
console.log(res3()); //3
console.log(res3()); //6