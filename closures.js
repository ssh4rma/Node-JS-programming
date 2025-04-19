function outer() {
  let password = 'xyz124';
  function closureFun(pass) {
    return pass === password;
  }
  return closureFun;
}

let res = outer();
console.log(res('xyz1224'));