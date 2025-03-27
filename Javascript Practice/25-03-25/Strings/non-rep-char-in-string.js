let str = "aabbccddeefo";
let N = str.length;

for(let i = 0; i < N; ++i) {
  let freq = 0;
  let j = i;
  while(j < N && str[j] == str[i]) {
    freq += 1;
    j++;
  }

  if(freq == 0) {
    console.log(str[i]);
    break;
  }
}