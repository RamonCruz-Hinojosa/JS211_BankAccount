class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = [];
  }

  balance() {
    let sum = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      sum = this.transactions[i].amount;
    }
    return sum;
  }

  charge(payee, amt) {
    let currentBalance = this.balance();
    if (amt <= currentBalance) {
      let chargeTransaction = new Transaction(-1 * amt, payee);
      this.transactions.push(chargeTransaction);
    }
  }

  deposit(amt) {
    if (amt > 0) {
      let depositTransaction = new Transaction(amt, "Deposit");
      this.transactions.push(depositTransaction);
    }
  }
}

class Transaction {
  constructor(amount, payee) {
    this.amount = amount;
    this.payee = payee;
    this.date = new Date();
  }
}

let t1 = new Transaction(30, "Deposit");
let acct1 = new BankAccount("1234567", "John James");
console.log(acct1.balance());

// couldn't get the tests to actually test my code
// // tests below
// if (typeof describe === "function") {
//   const assert = require("assert");

//   describe("#testing account creation", function () {
//     it("should create a new account correctly", function () {
//       let acct1 = new BankAccount("1234567", "John James");
//       assert.equal(acct1.owner, "John James");
//       assert.equal(acct1.accountNumber, "1234567");
//       assert.equal(acct1.transactions.length, 0);
//     });
//   });
// }
