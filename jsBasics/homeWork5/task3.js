function checkOrder(available, ordered){
    let message;
    if(ordered === 0){
        message = "Your order is empty!";
    } else if (available < ordered){
        message = "Your order is too large, we don’t have enough goods.";
    } else {
        message = "Your order is accepted.";
    }

    return message;
}

let result = checkOrder(60, 75);
console.log(result);

result = checkOrder(60, 15);
console.log(result);

result = checkOrder(60, 0);
console.log(result);
