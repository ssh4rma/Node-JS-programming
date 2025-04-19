let arr = [1,[2,5,[2,[5,1]],5]];

arr.flat(1); //returns a new array.

//
let res = arr.flatMap((val) => {
  if (Array.isArray(val)) {
    return val.flat(1); 
  } else {
    return val * 2;
  }
});