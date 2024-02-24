// const person = {
//     name : 'Alise',
//     greet : function (){
//         console.log(`Hello ${this.name}`);
//     }
// };
// person.greet();

// // стрілочні ф-ції не використовуються!
// const person = {
//     name : 'Alise',
//     greet : function => {
//         console.log(`Hello ${this.name}`);
//     }
// };
// const person = {
//     name : "Ivan"
// }
// const person2 = {
//     name : 'Piter',
//     greet : function() {
//     console.log(`Hello ${this.name}`);
//    },
//     sayHello (greetigText){
//         console.log(`${greetigText}, ${this.name}`);
//     }
// };
//
// person2.greet();
// person2.sayHello("Hola");
// const greetFunction = person2.sayHello.bind(person);
// greetFunction("Privit");
// person2.greet.call(person);

const numbers = [1, 3, 5, 7];
