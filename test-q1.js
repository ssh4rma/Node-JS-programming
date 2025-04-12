let arr = [2,3,4,6,5,7,3,1];
let low = 0, high = 0;
let i = 0;

while (i < arr.length - 1) {
  let newIdx = i;
  if (arr[i] < arr[i + 1]) {
    let j = i;
    let cnt = 0;
    while (j < arr.length - 1 && arr[j] < arr[j + 1]) {
      cnt++;
      j++;
    }
    if (cnt > 0) high++;
    newIdx = j;
  }
  else if (arr[i] > arr[i + 1]) {
    let j = i;
    let cnt = 0;
    while (j < arr.length - 1 && arr[j] > arr[j + 1]) {
    cnt++;
    j++;
    }
    if (cnt > 0) low++;
    newIdx = j;
  }
  i = newIdx === i ? i + 1 : newIdx;
}

console.log(`Low is: ${low}, High is: ${high}`);