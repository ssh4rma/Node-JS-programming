function fact(n) {
  if(n < 0) return -1; 
  if(n === 0 || n === 1) return 1; 
  return n * fact(n - 1);
}

console.log(fact(4));

var myFun = function helper(n) {
  if(n < 0) return;
  if(n === 0 || n === 1) return 1;

  return n * fact(n - 1);
}

console.log(myFun(5)); 