// const  userName = "Olena";
// function showMessage(){
//     const message = ":)";
//     if(true){
//         const name = "Viktor";
//         console.log(`Hello ${userName} in if block`, message);
//         console.log(`Hello ${name} in if block`, message);
//
//     }
//     // console.log("In function ", name) //ReferenceError: name is not defined
//     console.log(`Hello ${userName}!`);//використовується зовнішня змінна
// }
// showMessage();

// function showMessage2(){
//     const message = ":)";
//     if(true){
//         var name = "Viktor";//функціональна область видимості, та ігнорує будь-які блоки
//     }
//     console.log("In function ", name, message);
//     console.log(`Hello ${userName}`, message);//використовується зовнішня змінна
// }
// showMessage2();

// let userName1 = "Alex";
// function showMessage3(){
//     const userName1 = "Oleg";
//     console.log(`In function  ${userName1}`);
// }
// showMessage3();
// console.log("Outside ", userName1);


function withdrawal(amount, balance){
    if(amount === 0){
        console.log("Веедіть суму більше 0!")
    } else if(amount > balance){
        console.log("Недостатньо коштів на рахунку!")
    } else {
        console.log("Операція зняття коштів успішна!")
    }
}
withdrawal(100, 70);