function helper() {
  var n = 1; 
  console.log(n);
  function checkNum() {
    console.log(n);
  }
  n++;
  return checkNum;
}

var res = helper();
res();

//ex 2

function sayHello() {
  var say = function () {console.log(hello)};
  var hello = "Hello Shubham!"; 
  return say;
}

var op = sayHello();
op();

//lexical scoping
function foo() {
  let a = 5;
  function bar() {
    console.log(a);
    let b = 10;
    function baz() {
      console.log(b);
    }
    return baz();
  }
  return bar();
}

foo();