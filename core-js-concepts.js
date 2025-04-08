//nullish coalescing operator (??)
//It will return the right operand if the left one is null or undef
console.log(undefined ?? "Shubham");

//Type conversions
let a = '100';
console.log(Number(100));
console.log(Boolean(-1)); //will give false only for 0 and true for every number including negatives
console.log(String(100)); 


console.log(true + "shubham"); //this will convert this into string
console.log("shubham" + false);
//anything with string in addition will conver that to string
console.log("1" + 2);

//type cohersion
console.log('1' == true);
