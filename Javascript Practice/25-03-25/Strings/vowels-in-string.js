let str = "shubham";

let cnt = 0; 

function helper(c) {
  return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

for(let c of str) {
  if(helper(c)) cnt += 1;
}

console.log(cnt); 

//why is it printing numbers if I'm using for in loop for iterating a string.

for(let c in str) {
  console.log(str[c]);
}

return;