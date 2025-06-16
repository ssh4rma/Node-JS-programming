function outer() {
  let cnt = 0;
  return function inner() {
    cnt += 1;
    return cnt;
  }
}

let counter1 = outer(); 
let counter2 = outer();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());