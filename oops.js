class BankAccount {
  #balance; 

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ₹${amount}. New balance: ₹${this.#balance}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  checkBalance() {
    console.log(`Current balance: ₹${this.#balance}`);
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.checkBalance();



//Inheritance
class Vehical {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log('Starting your vehical'); 
  }

  getDetails() {
    return `Car is made by ${this.make}, Model of the car is ${this.model} and the Year of Manufacturing is ${this.year}`;
  }
}

class Car extends Vehical {
  constructor(make, model, year, seats) {
    super(make, model, year);
    this.seats = seats;
  }

  getDetails() {
    return `${super.getDetails()} with ${this.seats} seats`;
  }
}
 

const myCar = new Car("Hyundai", "Venue", 2021, 5);
myCar.start(); 
console.log(myCar.getDetails()); 