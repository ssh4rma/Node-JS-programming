let arr = ['apple', 'banana', 'cherry'];
let N = arr.length;

for(let i of arr) {
  let s = i;
  let mpp = new Map();

  for(let c of s) {
    if(mpp.has(c)) {
      let f = mpp.get(c);
      f = f + 1;
      mpp.set(c, f);
    } else mpp.set(c, 1);
  }

  let freq = []; 
  mpp.forEach((val, key) => {
    freq.push(val);
  });

  let demo = 1;
  for(let fr of freq) {
    demo *= helper(fr);
  }

  let res = helper(s.length) / demo;
  console.log(`${i}: ${res}`); 
}

function helper(n) {
  if(n <= 1) return 1;
  return n * helper(n - 1);
}