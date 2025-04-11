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