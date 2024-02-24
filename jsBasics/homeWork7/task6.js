const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copyArray = structuredClone(numbersList);
console.log('Copy array before sort :', copyArray);
copyArray.sort((a, b) => a - b);

console.log('Original array :', numbersList);
console.log('Copy array after sort :', copyArray);
