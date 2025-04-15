const arr = ['a', 'b', 'c', 'd'];

const res = [];

for (let i = 0; i < arr.length; ++i) {
  for (let j = i + 1; j < arr.length; ++j) {
    res.push([arr[i], arr[j]]);
  }
}

const output = res.map(([a, b]) => `[${a},${b}]`).join(', ');
console.log(output);