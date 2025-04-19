let arr = [1,[2,5,[2,[5,1]],5]];

arr.flat(1); //returns a new array.

//flatMap() Implementation
let res = arr.flatMap((val) => {
  if (Array.isArray(val)) {
    return val.flat(1); 
  } else {
    return val * 2;
  }
});

//recursively flatten the array
function helper(arr) {
  let flag = true;
  for(const ele of arr) {
    if(ele.length > 1) {
      flag = false;
      break;
    }
  } 
  if(flag) return arr;

  let res = [];
  for(const ele of arr) {
    if(Array.isArray(ele)) {
      res.push(...helper(ele));
    } else {
      res.push(ele);
    }
  }
  return res; 
}

console.log(helper(arr));