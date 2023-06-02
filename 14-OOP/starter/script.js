'use strict';

class Account {
    // Public fields (instances)
    locale = navigator.language;

    //Private fields (instances)
    // #movements = [];
    // #pin;

    constructor(owner, currency, pin) {

        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`)
    }

    // Public interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val)
        return this;
    }

    withdraw(val) {
        this.deposit(-val)
        return this;
    }


    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val)
            console.log(`Loan approved`)
        }
        return this;
    }

    // Private methods
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111,)
console.log(acc1)

// acc1.movements.push(250)
// acc1.movements.push(-140)

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000)
acc1._approveLoan(1000)
console.log(acc1)


//Chaining methods
 acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)