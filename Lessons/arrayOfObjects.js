const people =[
    {name: "Olena", age: 27},
    {name: "Oleg", age: 38},
    {name: "Frodo", age: 17}
];

// for (const person of people) {
//     console.log(person.name);
// }
//
// console.log("------------------------------------")
// people.forEach((person) => console.log(person.name));

//destructuring
// const person ={name: "Olena", age: 27, gender: "male"};
// const name = person.name;
// const age= person.age;
// console.log(name);
// console.log(age);

// const {name,age, gender = "unknown"}= person;
// console.log(name);
// console.log(age);
// console.log(gender);
//
// const {name:fullName}= person;
// console.log(fullName);

const people2 =[
    {name: "Olena", age: 27},
    // {name: "Oleg", age: 38},
    // {name: "Frodo", age: 17}
];

for (const person of people2) {
    console.log(`${people2.name} is ${people2.age} years old!`)
}

for (const {name,age }of people2) {
    console.log(`${name} is ${age} years old!`)
}

function printUserInfo({name,age, email = "null"}){
    console.log(`${name} is ${age} years old!`)
}

printUserInfo(people2);

