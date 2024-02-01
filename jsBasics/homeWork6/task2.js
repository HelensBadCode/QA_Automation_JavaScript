function countToZero(num){
    console.log(num)
    if(num > 0) {
        countToZero(num - 1)
    }
}
countToZero(5);