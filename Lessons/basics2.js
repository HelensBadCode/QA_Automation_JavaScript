// //procedure approach
// function calculationSum(a, b) {
//     return a + b;
// }
//
// function double(a) {
//     return a * 2;
// }
//
// const result = calculationSum(6, 9);
// console.log(result);
// const doubled = double(result);
// console.log(doubled);
//
//
//
// //functional approach
// const calculationSumFunction = (a, b) => a + b;
// const result2 = calculationSumFunction(67, 9);
// console.log(result2);
// const doubleFunction = a => a * 2;
// console.log(doubleFunction(calculationSumFunction(5, 8)));

// //OOP approach
// class Calculator{
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//
//     sum(){
//         return this.a + this.b;
//     }
//
//     double(){
//         return this.a * 2;
//     }
// }
//
// const calc = new Calculator(5, 8);
// const sumNum = calc.sum();
// const doubled2 = calc.double(sumNum);
// console.log(`Result  sum : ${sumNum} and result doubled : ${doubled2}`);
// console.log(sumNum);

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//
//     introduce(){
//         console.log(`Hello, my name is ${this.name}!`)
//     }
// }
//
// const student = new Student("Olena");
// console.log(student.name);
// student.introduce();

// //protected
// class BankAccount {
//     constructor(balance) {
//         this._balance = balance;
//     }
//
//     _getBalance(){
//         return this._balance;
//     }
//
//     printBalance(){
//         console.log("Your account balance is " , this._balance);
//     }
//
//     withdrawal(amount){
//         this._balance -=amount
//     }
// }
// const acc = new BankAccount(100);
// acc.withdrawal(15)
// // console.log(acc._getBalance()); //bad practice!
// acc.printBalance(); //good practice

//private
class BankAccount {
    #balance
    constructor(balance) {
        this.#balance = balance;
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
const acc = new BankAccount(100);
acc.withdrawal(15)
// console.log(acc.#balance);//SyntaxError: Private field '#balance' must be declared in an enclosing class
acc.printBalance();

class EBankAccount extends BankAccount(){
    constructor(balance) {
        super(balance);
    }

    printEBalance(){
        console.log("Your account balance is " , this.#balance);
    }
}

const EBankAAcc= new BankAccount(100);
EBankAAcc.printBalance();