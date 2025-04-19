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
}