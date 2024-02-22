function printTextWithDelay(text, ml_sec) {
    setTimeout(() => {
        console.log(text);
    }, ml_sec);
}

printTextWithDelay("It works!", 3000);

