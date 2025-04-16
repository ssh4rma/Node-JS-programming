//We can't compare objects
console.log(new Number(3) === new Number(3)); //false

console.log(3 == new Number(3)); //true 


//reusable data service that manages a list of users (objects) and provides methods to add, remove, and retrieve users.

function userSerive() {
  let users = [
    {id: 1, name: "Bob", email: "bob@gmail.com"},
    {id: 2, name: "Alice", email: "alice@gmail.com"},
  ];

  //public methods
  this.addUser = function(newUser) {
    newUser.id = users.length + 1; 
    users.push(newUser);
  }

  this.removeUser = function(id) {
    users = users.filter((usr) => {
      return (usr.id !== id)
    });
  }

  this.getUser = function() {
    return [...users];
  }
}

const func = new userSerive(); 

console.log(func.getUser()); //will return the complete user name data.
let newuser = {
  id: 55,
  name: "John Doe",
  email: "john@gmail.com"
};
func.addUser(newuser);
console.log(func.getUser());

//Scope inheritance with objects

function parentScope() {
  this.appName = 'my-application'; 
  this.sharedData = {message: 'Hello world this is shubham'};
}

function childScope(parent) {
  this.__proto__ = parent;
  this.childMessage = 'Hello from child';
  this.localData = {message: 'This is the local message from child'}; 
}

const f1 = new parentScope();
const f2 = new childScope(f1);

console.log(f1.sharedData);
console.log(f2.sharedData);//accessed the shared data in child scope from parentscope

console.log(f2.childMessage);
console.log(f2.appName);