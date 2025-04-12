let str = "hellouser"; 
let func = new Function('str', 'console.log(str)');

func(str); 

function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); //error


