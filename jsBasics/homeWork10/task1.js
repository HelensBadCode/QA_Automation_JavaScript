function printTextWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printTextWithDelay('It works!', 3000);
