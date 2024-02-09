const users = [
    { name: 'John', email: 'john21@gmail.com', age: 30 },
    { name: 'Alice', email: 'aliceYoung@com.ua', age: 25 },
    { name: 'Bobby', email: 'sweety123@gmail.com', age: 35 },
    { name: 'Kvitka', email: 'qaqa@gmail.com', age: 28 }
];

for (const user of users) {
    console.log(`User ${user.name} is ${user.age} years old, has an email ${user.email}!`);

}
console.log("--------------------------------------------------------------------------------------------------------");
for (const { name, email,age } of users) {
    console.log(`User ${name} is ${age} years old , has an email ${email}!`);
}
