//reverse the stack using recursion
let st = [1,2,3,5,7,6];

function fillStack(num, st) {
  if(st.length === 0) {
    st.push(num);
    return;
  }
  let temp = st.pop();
  fillStack(num, st);
  st.push(temp);
}

function emptyStack(st) {
  if(st.length === 0) return;
  let temp = st.pop();
  emptyStack(st);
  fillStack(temp, st);
}

emptyStack(st);
console.log(st);