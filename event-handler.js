console.log("hello");
setTimeout(() => {
  console.log("inside event loop");
}, 2000);
console.log("world"); 