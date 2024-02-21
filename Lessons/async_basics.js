// // basics
// console.log("Line 1");
// console.log("Line 2");
// console.log("Line 3");

// console.log("Line 1");
// setTimeout(()=>console.log("Line 2"), 0);//last
// console.log("Line 3");
//---------------------------------------------------------------------------------------------------------------------
// //callbacks - old implementation
// function notifyCustomer(){
//     console.log("Pizza is ready");
// }
//
// function cookPizza(onPizzaDone){
//     setTimeout(()=> {
//         console.log("Pizza is done")
//         onPizzaDone()
//     }, 3000)
//
//     // console.log("Pizza is done");
// }
//
// cookPizza(notifyCustomer);
//---------------------------------------------------------------------------------------------------------------------
// //promises
// const promise =  new Promise((resolve, reject)=>{
//     // console.log("text from promise!");//Promise { <pending> }
//     resolve("hello from promise");
//     // reject(new Error("Error in promise"));
//     // reject("CUSTOM ERROR");
//
// });
//
// console.log(promise);
// promise.then((value) =>{
//     console.log(`RESOLVED VALUE ${value}`);
// })
//
// promise
//     .then((value)=>{
//         return value.toUpperCase();
//     })
//     .then((upperValue)=>{
//         console.log(upperValue);
//     })
//     .catch((e)=>{
//     console.log(e.message);
//     })
//     .finally(()=>{
//     console.log("final");
//     })

// // methods
// Promise.resolve("Hello").then().catch();
// Promise.reject(new Error("Error")).then().catch((e)=> console.log(e.message));

//----------------------------------------------------------------------------------------------------------------------
// All
function promiseA (){
    return Promise.resolve("A");
}

function promiseB (){
    return Promise.resolve("B");
}

function promiseC (){
    //return Promise.resolve("C");
    return Promise.reject(new Error("Error C"));
}

// //Promise_all - повертає все, тільки якщо всі виконались успішно
// Promise.all([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//     console.log(values);
// })
//     .catch(e=> console.log(e.message));

// // allSettled - повертає все, навіть якщо є помилка
// Promise.allSettled([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//         console.log(values);
//     });

// //race - повертає перший успішний запит який метод зрезолвив
// Promise.race([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//         console.log(values)
//     }).catch((e)=> e.message);

// any -певертає будь-який запит, який виконався успішно
// Promise.any([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
//     .then((values)=>{
//         console.log(values)
//     }).catch((e)=> e.message);

const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
});

Promise.race([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
}).catch((e)=>console.log(e));
