//blocked scoped: this is introduced in ES6 
//let and const are blocked scoped

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