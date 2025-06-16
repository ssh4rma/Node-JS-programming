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

sayHello(); // Hello, Guest


func(); // Error

//limitation of NFE
let sayHello2 = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHello2("Guest"); 
  }
};

let welcome = sayHello2;
sayHello2 = null;

welcome(); // Errorfunction fact(n) {
  if(n < 0) return -1; 
  if(n === 0 || n === 1) return 1; 
  return n * fact(n - 1);
}

console.log(fact(4));

var myFun = function helper(n) {
  if(n < 0) return;
  if(n === 0 || n === 1) return 1;

  return n * fact(n - 1);
}

console.log(myFun(5)); 