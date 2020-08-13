class Account {
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    print() {
        console.log(this.accountNumber, this.holderName, this.balance);
    }
}
    Account.prototype.deposit = function(amount) {
    this.balance += amount;
}
    Account.prototype.withdraw = function(amount)
{
    this.balance -= amount;
}
var eich = new Account(9713975864, "RaviMalviya", 5000);
eich.print();
eich.deposit(100);
eich.withdraw(50);
console.log(eich);