// function countToZero(startValue){
//     for (let i = startValue; i >= 0 ; i--) {
//         console.log(i)
//     }
// }
// countToZero(5);

function countToZero2(startValue) {
  console.log(startValue);
  if (startValue > 0) {
    countToZero2(startValue - 1);
  }
}
countToZero2(5);
