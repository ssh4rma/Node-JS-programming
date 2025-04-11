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