let str = "hellouser"; 
let func = new Function(str);

func();

function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); //error