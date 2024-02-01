function Person(name,age){
    this.name = name
    this.age= age
    this.sayHello = function (){
        console.log(`Hello, my name is ${this.name} !`);
    }
}
const user1 = new Person("Piter",27);
console.log(user1);
const user2 = new Person("Alise",21);
user2.sayHello();