const numberGenerate = Math.round(Math.random() * 10);
const number = numberGenerate >= 1 ? numberGenerate : 1;

console.log('For :');
for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} * ${i} = ${result}`);
}

let index = 1;
console.log('While :');
while (index <= 10) {
  const result2 = number * index;
  console.log(`${number} * ${index} = ${result2}`);
  index++;
}
