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

//closures example:
var result = [];
for(let i = 0; i < 5; ++i) {
  result[i] = function() {
    console.log(i);
  }
}

result[0]();
result[1]();
result[2]();
result[3]();
result[4]();

//closures exmaple of keeping the scope for subsequent function calls

function iCantThinkOfAName(num, obj) {
  var array = [1, 2, 3];
  function doSomething(i) {
    num += i;
    array.push(num);
    console.log('num: ' + num);
    console.log('array: ' + array);
    console.log('obj.value: ' + obj.value);
  }

  return doSomething;
}

var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject);
var bar = iCantThinkOfAName(6, referenceObject);

foo(2); 
bar(2); 

referenceObject.value++;

foo(4);
bar(4); 

//example
function mysteriousCalculator(a, b) {
  var mysteriousVariable = 3;
  return {
      add: function() {
          var result = a + b + mysteriousVariable;
          return toFixedTwoPlaces(result);
      },

      subtract: function() {
          var result = a - b - mysteriousVariable;
          return toFixedTwoPlaces(result);
      }
  }
}

function toFixedTwoPlaces(value) {
  return value.toFixed(2);
}

var myCalculator = mysteriousCalculator(10.01, 2.01);
myCalculator.add() 
myCalculator.subtract() 