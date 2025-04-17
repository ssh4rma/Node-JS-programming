console.log(null == undefined); //true

console.log([] >= 0);

console.log(null + "10"); //null10

console.log(undefined - 5); //NaN

console.log("3" * "2") //6

console.log([] == ![]); //true
// [] is truthy value, toString([]) -> "" ; Number("") -> 0
// !(true) = false ; 0 == false; and Number(false) = 0, 0 == 0 => true;

console.log(0 && 'hello' || 5); //5
//&& will return the first falsy value or last of all truthy value
//|| will return the first truthy value, or last of all falsy value

console.log(NaN > undefined); //false

console.log("true" == true); //false
//because true will be converted to it's number form which is 1 and true will be converted to it's number form which is NaN and NaN == 1 is false

console.log([5] == 5); //true
// [5] -> toString([5]) -> "5" -> Number(5) = 5;
//5 == 5;
console.log("3" == 3); //true

console.log({x : 5} == 5); //false 
//because {x : 5} will be converted to [object Object] and the number() of which is equals to NaN and NaN == 5 is false

console.log(5 + null || false);
// 5 + null is 5 || false = 5 so 5

console.log("" - 1); //-1

console.log([1] + [2]); //12
//because "1" + "2" is string concatenation

console.log([1, 2] == "1,2"); //true

console.log({} == "[object Object]"); //true

console.log(null == undefined); //true  

/// *** IMPORTANT *** 
console.log(NaN == NaN); //true


console.log("0" == false); //true
console.log([0] == false); //true

console.log({ value: 10 } == 10); //false
//because Number(object Object) is NaN and NaN == 10 is false