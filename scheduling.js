setTimeout(() => {
  console.log("Timeout for 5000ms")
}, 5000);

let cnt = 0;
const id = setInterval(() => {
  console.log(`Tick ${cnt++}`);
  if(cnt === 3) clearInterval(id);
}, 1000);