// ifElse
// const isMarried = false;
// if(isMarried){
//     console.log("Person is married!");
// } else {
//     console.log("Person is single!")
// }
// const userAge = 11;
// let accessType;
//
// const accessType2 = userAge >=18 ? "FULL ACCESS" : "NO ACCESS";
// console.log("User type :", accessType2);
//
// if(userAge >= 18){
//     accessType = "FULL ACCESS"
// } else if (userAge >= 14){
//     accessType = "LIMITED ACCESS"
// } else {
//     accessType = "NO ACCESS"
// }
// console.log("User type :", accessType);

// const userName = "Svitlana";
// if(if)
// if(userAge>=18){
//     console.log("User is adult")
//     if(userName.length){
//         console.log("Name is too long.")
//
//     }
//     else {
//         console.log("Name is normal length.")
//     }
// } else {
//     console.log("User is not adult")
// }

// switch (userAge) {
//     case 10:
//         console.log("10 years")
//         break;
//     case 11:
//         console.log("11 years")
//         break;
//     case 18:
//         console.log("18 years")
//         break;
//     default:
//         console.log("Unhandled age")
// }

// switch (userName[0]){
//     case "A":
//     case "S":
//         console.log("WIN 1000!")
//         break;
//     case "B":
//         console.log("WIN 2000!")
//         break;
//     case "O":
//         console.log("WIN 3000!")
//         break;
//     default:
//         console.log("Try again!")
//         break;
// }

// const isMarried = true;
// const yearsInCompany = 5;
//
// switch (true){
//     case isMarried && yearsInCompany > 5:
//         console.log("WIN 1000!");
//         break;
//     case isMarried && yearsInCompany > 2:
//         console.log("WIN 500!");
//         break;
//     default:
//         console.log("Congratulation, you are married!");
// }

// //LOOPS
// FOR
// for(let i = 0; i <= 10; i++){
//     console.log("My name is ....");
//     console.log(`Index ${i}`);
// }
// console.log("Slim Shedyy!")
// for(let i = 2; i <= 10; i+=2){
//     console.log(`Index ${i}`);
// }

// for(let i = 1; i <= 10; i++){//не парні
//     if(i % 2 === 0){
//         continue
//     }
//     console.log(`Index ${i}`);
// }

// for(let i = 1; i <= 10; i++){//парні
//     if(i % 2 !== 0){
//         continue
//     }
//     console.log(`Index ${i}`);
// }

// for(let i = 1; i <= 10; i++){//парні
//     if(i % 2 === 0){
//         continue
//     }
//     if(i === 5){
//         break
//     }
//     console.log(`Index ${i}`);
// }

// //WHILE
// let index = 0;
// while (index < 10){
//     if(index % 2 === 0){
//         index++
//         continue
//     }
//     console.log(`Index ${index}`);
//     if(index === 5){
//         break
//     }
//     index ++
// }

// DO WHILE
// let a = 0;
// do{
//     console.log(a);
//     a++
// } while (a <= 10)

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`Index J ${j}`);
  }
  console.log('Index I', i);
}
