let arr = [2,1,2,3,4,7,8,9,6];
let patt = [2,1,3,8];

let res = [];

for(let i of patt) {
  for(let j = 0; j < arr.length; ++j) {
    if(arr[j] === i) {
      res.push(arr[j]);
      arr[j] = -1;
    }
  }
}

let temp = [];
for(let i of arr) {
  if(i !== -1) {
    temp.push(i);
  }
}

for(let i = 0; i < temp.length; ++i) {
  for(let j = i + 1; j < temp.length; ++j) {
    if(temp[j] < temp[i]) {
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
  }
}

// console.log(temp);

for(let i of temp) {
  res.push(i);
}

console.log(res);