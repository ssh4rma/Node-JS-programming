console.log(null == undefined); //true

console.log([] >= 0);

console.log(null + "10"); //null10

console.log(undefined - 5); //NaN

console.log("3" * "2") //6

console.log([] == ![]); //true
// [] is truthy value, toString([]) -> "" ;toValue("") -> 0
// !(true) = false ; 0 == false; and Number(false) = 0, 0 == 0 => true;