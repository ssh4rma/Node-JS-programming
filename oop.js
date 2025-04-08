class animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

let dog = new animal("dog", "mammal");
let fish = new animal("snake", "reptile");

console.log(dog.name);