let str = "shubham sharma";
let N = str.length;

let i = 0;
while(i < N) {
  str[i] = str[i].toUpperCase();
  
  while(i < N && str[i] != ' ') {
    i++;
  } 
}

console.log(str);