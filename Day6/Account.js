class Account {
    //! static field
    static count = 0; //! Mummy
    //# Fields
    accountNumber = 0;

    //^ # is stricly private (works only for a class)
    #holdersName = "";
    #balance = 0; //? _ before property is a "request" to caller to NOT use it directly

    //% constructor
    constructor(accountNumber, holdersName, balance) {
        this.accountNumber = accountNumber; //% Kid
        this.#holdersName = holdersName;    //% kid
        this.#balance = balance;            //% Kid
        Account.count++;
    }

    // getter and setter
    get balance() { return this.#balance; }          //! READ-ONLY
    
    get name() { return this.#holdersName; }            //* READ-WRITE
    set name(newName) { this.#holdersName = newName;}  //* READ-WRITE

    //* METHODS
    deposite(amount) {     //* prototype
       this.#balance += amount;
    }
    withdraw(amount) {    //* prototype
        this.#balance -= amount;
    }
    print() {            //* prototype
         console.log("Acocunt Number: ", this.accountNumber);
         console.log("Holders name: ", this.#holdersName);
         console.log("Balance: ", this.balance);
    }
} // end of class

var eich = new Account(1, "Brendan", 1000);
var marc =  new Account(2, "Priyanka", 2000);

eich.deposite(1000);
eich.print();

eich.withdraw(1000);
eich.print();

console.log(march.name);
//marc.name = "Marc"; // ! this should return error
console.log(marc.name);////