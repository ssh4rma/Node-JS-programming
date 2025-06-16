//recursion
function fact(n) {
  if(n < 0) return 0;
  if(n === 0 || n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(11));

//stack
const st = [];

function pushInStack(num) {
  st.unshift(num);
}

function popFromStack() {
  st.shift();
}

function printStack() {
  for(let i of st) console.log(i); 
}

pushInStack(5);
pushInStack(6);
pushInStack(7);
pushInStack(8);

printStack();

popFromStack();
console.log("after popping the top element stack is: ")
printStack();