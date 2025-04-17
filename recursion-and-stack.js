//reverse the stack using recursion
let st = [1,2,3,5,7,6];

function fillStack(num, st) {
  st.unshift(num);
}

function emptyStack(st) {
  if(st.length === 0) return;
  let temp = st.pop();
  emptyStack(st);
  fillStack(temp, st);
}

emptyStack(st);
console.log(st);