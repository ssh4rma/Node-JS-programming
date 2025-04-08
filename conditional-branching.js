let age = 45;

let message = (age < 3) ? "too small" : 
              (age < 18) ? "can't vote" : 
              (age < 100) ? "old mf" : 
              "not old";

console.log(message);