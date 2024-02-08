const arrayBeforeChanges = [1, 2, 3, 4, 5];
const arrayAfterChanges = arrayBeforeChanges.map((number, index)=> number * index);
console.log("New array :", arrayAfterChanges);