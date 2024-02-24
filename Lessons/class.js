// modification
// public
class Student {
  // color= "efffff"; //static data or default
  constructor(name, age) {
    this.name = name;
    this.age = age + 1;
    this.color = 'black';
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}! I am ${this.age} years old.`);
  }
}

// const student = new Student("Olena", 19);
// console.log(student.name);
// console.log(student);
// student.introduce();

// //protected
// class BankAccount {
//     constructor(balance = 100) {
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
// const acc = new BankAccount(200);
// acc.withdrawal(15)
// // console.log(acc._getBalance()); //bad practice!
// acc.printBalance(); //good practice

// // private
// class BankAccount {
//   #balance;
//
//   constructor(balance) {
//     this.#balance = balance;
//   }
//
//   #getBalance() {
//     return this.#balance;
//   }
//
//   printBalance() {
//     console.log('Your account balance is ', this.#balance);
//   }
//
//   withdrawal(amount) {
//     this.#balance -= amount;
//   }
// }
// const acc = new BankAccount(100);
// acc.withdrawal(15);
// // console.log(acc.#balance);//SyntaxError
// acc.printBalance();
//
// class EBankAccount extends BankAccount {
//   constructor(balance) {
//     super(balance);
//   }
//
//   // printEBalance(){
//   //     console.log("Your account balance is " , this.#balance);// SyntaxError
//   //
//   // }
// }
//
// const EBankAAcc = new EBankAccount(100);
// EBankAAcc.printBalance();
