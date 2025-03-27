let str = "Shubham";
let N = str.length;  

let res = "";

for(let i = N-1; i >= 0; --i) {
  res += str[i];
}

console.log(res); 