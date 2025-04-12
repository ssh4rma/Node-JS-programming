function f(sayHi = function() {}) {
  console.log(sayHi.name);
};
f(); //sayHi


//objects name
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