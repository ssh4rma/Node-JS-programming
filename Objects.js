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
    return [...user];
  }
}