//basic
// function calculateSum(num1, num2){
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     let sum = num1 +num2;
//     return sum;
//
//     console.log("Unreachable code");//не виконується все після return
// }
// calculateSum(6,9);
// const result = calculateSum(6,90);
// console.log("Result:", result);
//----------------------------------------------------------------------------------------------------------------------
//
// //function declaration
// console.log(calculateSumDeclaration(90, 6));//hosting in declaration function -ok
// function calculateSumDeclaration(num1, num2){
//     let sum = num1 +num2;
//     return sum;
//     // return num1 +num2;
// }
// console.log(calculateSumDeclaration(70, 6));//ok
//----------------------------------------------------------------------------------------------------------------------

//function expression
// console.log(calculateSumExpression(90, 6));//error
// const calculateSumExpression = function (num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// console.log(calculateSumExpression(90, 6));//ok
//----------------------------------------------------------------------------------------------------------------------

//arrow function expression
// const calculateSumArrow = (num1, num2) => {
//     let sum = num1 + num2;
//     return sum;
// }
// console.log(calculateSumArrow(70, 6));//ok
//----------------------------------------------------------------------------------------------------------------------

//concise arrow function expression
// const calculateSumArrow2 = (num1, num2) => num1 + num2;
// console.log(calculateSumArrow2(10, 6));//ok
//----------------------------------------------------------------------------------------------------------------------

//Practice
// function calculateSumNaN(num1, num2){
//     let sum = num1 +num2;
//     return sum;
// }
// console.log(calculateSumNaN(1));//NaN

// function calculateSumDefaultParam(num1 = 9, num2 = 6){
//     let sum = num1 +num2;
//     return sum;
// }
// console.log(calculateSumDefaultParam(1));
// console.log(calculateSumDefaultParam(1,88));
// console.log(calculateSumDefaultParam(undefined,8));

// function calculateSumLotOfArguments(...numbers){
//     console.log(numbers);
// }
// calculateSumLotOfArguments(1, 66, 9, 6, 3);

// function calculateSumReduce(...numbers){
//     return numbers.reduce((acc, item)=> acc + item);
// }
// console.log(calculateSumReduce(1, 66, 9, 6, 3));

// const printUserInfo = (age, name, ...rest) => {
//     console.log("User age", age);
//     console.log("User name", name);
//     console.log("Additional args", rest);
// }
// printUserInfo(22, "Ivan");
// console.log("------------------------------------------------")
// printUserInfo(28, "Olena", "Additional info");

// function printUserInfo2(age, name, ...rest) {
//     console.log("Arguments :", arguments)
//     // console.log("User age  :", age);
//     // console.log("User name :", name);
//     // console.log("Additional args", rest);
// }
// printUserInfo2(28, "Olena", "Additional info");

// function printUserInfo2(age, name, ...rest) {
//     console.log("Arguments - ",...arguments);
//     console.log("Rest - ", "Additional args", rest);
// }
//
// printUserInfo2(25, "Olivia");
// console.log("---------------------------------------------------");
// printUserInfo2(25, "Olivia", "Additional info");


