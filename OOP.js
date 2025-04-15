let num = 5.56789;
let n = num.toFixed(2);
console.log(n); 
console.log(typeof(n)); 
//5.57
//string

//polymorphism

class Duck {
  type = () => console.log('Hello'.repeat(3));
}

class Cat {
  type = () => console.log('World'.repeat(3));
}

let makeDucksType = (possibleDuckImposter) => possibleDuckImposter.type(); 

let duck = new Duck();
let cat = new Cat();

[duck, cat].forEach(obj => makeDucksType(obj));


//private member
class Animal {
  #name; // Private field
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
  makeSound() {
    return "Some generic animal sound";
  }
}