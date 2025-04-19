const array1 = [1, 2, 3];

console.log(array1.includes(2)); //true 


const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat")); //true
console.log(pets.includes('at')); //false

//join(): array -> string
console.log(pets.join(', '));

//slice(): retuns a new array (range is "[ )" )
console.log(pets.slice(1, 3));

//map(): returns new array applying the operation of callback function

console.log(pets.map((val) => {
  return val.length * 2;
}));