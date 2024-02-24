// callback - функція яка передається в іншу функцію в якості аргументу
// function hot (callback){
//     console.log("High order function!");
//     callback()//функція яка передається в іншу функцію в якості аргументу
// }
//
// const sayHello = () => console.log("Hello from Callback");
// hot(sayHello);

function processPayment(status1, status2) {
  try {
    if (Date.now() % 2 === 0) {
      throw new Error('Error payment!');
    }
    status1();
  } catch (e) {
    status2(e);
  }
}

function onPaymentSuccess() {
  console.log('Payment has been processed!');
}

function onPaymentError(error) {
  console.log(`Payment error: ${error.message}`);
}

processPayment(onPaymentSuccess, onPaymentError);
