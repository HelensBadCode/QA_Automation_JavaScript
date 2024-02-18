class BankAccount {
    #balance
    constructor(balance) {
        this.#balance = balance;

    }

    get balance(){
        return this.#balance
    }

    set balance(amount){
        if(amount < 0 || typeof amount != "number"){
            return
        }
        this.#balance = amount;
    }
    #getBalance(){
        return this._balance;
    }

    printBalance(){
        console.log("Your account balance is " , this.#balance);
    }

    withdrawal(amount){
        this.#balance -=amount
    }
}

const acc = new BankAccount(111);
console.log(acc.balance);
acc.balance = 88;
console.log(acc.balance);
