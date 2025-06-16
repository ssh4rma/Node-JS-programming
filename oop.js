class Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

let dog = new Animal("dog", "mammal");
let fish = new Animal("snake", "reptile");

console.log(dog.name);

//Inheritence

class School {
  constructor(name) {
    this.name = name; 
  }
  nameOftheSchool() {
    console.log(`The name of the school is ${this.name}`);
  }
}

class Class extends School {
  constructor(cName) {
    super(cName);
    this.cName = cName;
  }
  nameOfClass() {
    console.log(`The name of the school is ${this.cName}`);
  }
}

let s1 = new School("GVM");
let c1 = new Class("9A");

console.log(c1.nameOftheSchool());
console.log(s1.nameOftheSchool());