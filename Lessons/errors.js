const temperature = 60;
console.log('Start!');

try {
  if (temperature <= 80) {
    // console.log("Water is boiling");
    // throw "My custom error string!";

    throw new Error('My custom error');
  }
  console.log('End of try block'); // no error
} catch (e) {
  // when block try has error
  console.log(e.message);
} finally {
  console.log('Finally block!'); // present always
}

console.log('Finish!');
