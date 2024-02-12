const person = {
    firstName: "Megan",
    lastName: "Fox",
    age: 37
};
person.email = "megan_Fox22@gmail.com";
console.log("Personal info: ", person);
console.log("--------------------------------------------------------------------------------------------------------");

delete person.age;
console.log("Personal info without age: ", person);
