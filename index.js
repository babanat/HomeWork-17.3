class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  depositCash(money) {
    this.balance += money;
    return this.getBalance();
  }
  withdraw(money) {
    if (this.balance < money) {
      console.log("There is not enough money in your account");
      return this.getBalance();
    }
    this.balance -= money;
    return this.getBalance();
  }
}
const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.depositCash(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300
