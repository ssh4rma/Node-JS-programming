//rest operator
function helper(...arr) {
  for(let i of arr) console.log(i); 
}


helper(1,2,3,4);

//spread operator
const arr = [1,2,4,4,5]; 
helper(...arr);