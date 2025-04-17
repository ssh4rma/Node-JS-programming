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


// Create a recursive function to find the minimum element in a stack

let mx = -1;
function findMx(st) {
  if(st.length === 0) return;
  let temp = st.pop();
  mx = Math.max(mx, temp);
  findMx(st);
}
findMx(st);
console.log(mx);

//Implement a recursive function to calculate the sum of all elements in a stack.

function findSum(st, sum) {
  if (st.length === 0) return sum;
  let temp = st.pop();
  sum += temp;
  return findSum(st, sum);
}

let sum = 0;
console.log(findSum(st, sum)); 