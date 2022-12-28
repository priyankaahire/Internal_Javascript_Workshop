function Account(accountNumber, holderName, initialBalance) {

    this.acc            = accountNumber;
    this.holderNmae     = holderName;
    this.bal = initialBalance;
    Account.objCount++;
}

Account.objCount = 0;

Account.prototype.deposite = function(amt) {
    this.bal += amt > 0 ? amt : 0;
    console.log(`${this.bal}`);
};

Account.prototype.withdraw = function(amt) {
    this.bal -= amt > 0 ? amt : 0;
    console.log(`${this.bal}`);
}

Account.prototype.print = function() {
    console.log(`Holder name: ${this.holderNmae} Bal: ${this.bal}, acc: ${this.acc}`);
}




var axiBank  = new Account("213243432545", "priyanka", 2000);
var hdfcBank  = new Account("666663432545", "jeshal", 5000);

axiBank.deposite(100);
axiBank.withdraw(50);
axiBank.print();


hdfcBank.deposite(50);
hdfcBank.withdraw(40);
hdfcBank.print();

console.log(Account.objCount);