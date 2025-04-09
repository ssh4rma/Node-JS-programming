//blocked scoped: this is introduced in ES6 
//let and const are blocked scoped

let xxx = 19999;

{
  let x = 5;
  const y = 10;
  var z = 100;
  console.log(x);
  console.log(y);
}

console.log(x); //error
console.log(y); //error
console.log(z); //100

//local scope
function helper() {
  let x = 10;
  console.log(x);
}

helper();
console.log(x); //reference error

//functional scope
function helper2() {
  var zz = 10100;
  console.log(zz);
}
helper2();
console.log(zz); //reference error

//Global scope
console.log(xxx);