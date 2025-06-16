let arr = ['aabb', 'abc', 'bba', 'aaabbb'];
let N = arr.length;

for (let i = 0; i < N; ++i) {
  let s = arr[i];
  let tSet = new Set();
  for (let c of s) tSet.add(c);
  let newStr = '';
  for (let ch of tSet) {
    newStr += ch;
  }

  let resSet = new Set();
  let t = [];
  helper(newStr, resSet, 0, t);
  console.log(resSet.size);
}

function helper(s, st, i, t) {
  if (i === s.length) {
    st.add(t.join(''));
    return;
  }

  t.push(s[i]);
  helper(s, st, i + 1, t);
  t.pop();
  helper(s, st, i + 1, t);
}


for(let i = 0; i < N; ++i) {
  let s = arr[i];

  let mpp = new Map();
  for(let j of s) {
    if(mpp.has(j)) {
      let c = mpp.get(j); 
      c = c + 1;
      mpp.set(j, c);
    } else {
      mpp.set(j, 1);
    }
  }

  let freq = [];
  mpp.forEach((val, key) => {
    freq.push(val);
  })

  let deno = 1;
  for(let k of freq) {
    deno *= helper(k);
  }

  let res = helper(s.length) / deno;
  console.log(res);
}

function helper(n) {
  if(n <= 1) return 1;
  return n * helper(n - 1);
}