class Student {
  static sharedData = "Shared";

  schoolName() {
    return Student.sharedData;
  }
}

const student1 = new Student();
const student2 = new Student();

console.log(student1.schoolName()); // "Shared"
console.log(student2.schoolName()); // "Shared"

Student.sharedData = "Changed";

console.log(student1.schoolName()); // "Changed"
console.log(student2.schoolName()); // "Changed"


const ob = {
  name : "shubham", 
  age : "23",
  location : "Chennai",

  getInfo : function (){
    return `${this.name}, ${this.age}, ${this.location}`;
  }
}

const ob1 = Object.create(ob); 
console.log(ob1.getInfo());
console.log(ob1.prototype);

function User(name){
  this.name = name;

  console.log(this);
}

User.prototype.printName = function(){
  console.log(this.name)
}


let kedar = new User("kedar")

const arr = [1,2,4,4,5,5]

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique());

class UserInfo {
  constructor(name){
    this._name = name
  }

  get getName(){
    console.log(this._name)
  }

  set setName(newName){
    this._name = newName
  }
}

const u1 = new UserInfo("Shubham");
console.log(u1.getName);
u1.setName = "Rajesh";
console.log(u1.getName);


//class declaration
class Car {
  constructor(brand, model) {
    this.brand = brand; 
    this.model = model;
  }

  drive() {
    return `${this.brand} ${this.model} is driving!`;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.drive());


//private variable in class
class Bank {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  getBalance() {
    return this.#balance; 
  }
}
