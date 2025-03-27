let str = "lol"; 
let N = str.length;

for(let i = 0; i < N / 2; ++i) {
  if(str[i] != str[N-i-1]) {
    console.log("False");
  }
}

console.log("True");