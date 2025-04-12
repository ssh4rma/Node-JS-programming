function f(sayHi = function() {}) {
  console.log(sayHi.name);
};
f(); //sayHi


//function.name
let user = {
  sayHi() {
    console.log("sayHi");
  }, 

  sayBye : function() {
    console.log("Say bye");
  }
};

console.log(user.sayHi.name);
console.log(user.sayBye.name);

//function.length

console.log(user.sayHi.length)
console.log(user.sayBye.length)

//NFE
let sayHi = function(who) {
  console.log(`Hello, ${who}`);
};  


sayHi("Shubham");

//NFE usecase
let sayHello = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); 
  }
};

sayHi(); // Hello, Guest


func(); // Error