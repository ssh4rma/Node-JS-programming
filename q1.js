let arr = ['A', 'B', 'C', 'D'];

let N = arr.length;
let res = [];

for(let i = 0; i < N; ++i) {
  for(let j = i + 1; j < N; ++j) {
    let t = [];
    t.push(arr[i]);
    t.push(arr[j]);
    res.push(t);
  }
}

console.log(...res);