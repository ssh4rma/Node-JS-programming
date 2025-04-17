console.log(null == undefined); //true

console.log([] >= 0);

console.log(null + "10"); //null10

console.log(undefined - 5); //NaN

console.log("3" * "2") //6

console.log([] == ![]); //true
// [] is truthy value, toString([]) -> "" ;Number("") -> 0
// !(true) = false ; 0 == false; and Number(false) = 0, 0 == 0 => true;

console.log(0 && 'hello' || 5); //5
//&& will return the first falsy value or last of all truthy value
//|| will return the first truthy value, or last of all falsy value

console.log(NaN > undefined); //false

console.log("true" == true); //false
//because true will be converted to it's number form which is 1 and true will be converted to it's number form which is NaN and NaN == 1 is false
