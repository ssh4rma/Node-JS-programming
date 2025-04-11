setTimeout(() => {
  console.log("Timeout for 5000ms")
}, 5000);

let cnt = 0;
const id = setInterval(() => {
  console.log(`Tick ${cnt++}`);
  if(cnt === 3) clearInterval(id);
}, 1000);

//modern scheduling with async and await
async function delay(ms) {
  await new Promise(resolve => setTimeout(resolve, ms)); 
  console.log("Hello");
}
delay(1000);