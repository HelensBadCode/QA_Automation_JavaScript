function handleNum(number, handleEven, handleOdd) {
  if (number === 0) {
    console.log('Number can not be 0!');
  } else if (number % 2 === 0) {
    handleEven();
  } else if (number % 2 !== 0) {
    handleOdd();
  }
}

function handleEven() {
  console.log('Number is even.');
}

function handleOdd() {
  console.log('Number is odd.');
}

handleNum(0, handleEven, handleOdd);
handleNum(5, handleEven, handleOdd);
handleNum(222, handleEven, handleOdd);
