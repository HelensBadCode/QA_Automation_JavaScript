function divideNumbers (numerator,denominator){
    if (typeof numerator !== 'number' || typeof denominator !== 'number'){
        throw new Error("Error: both parameters must be number!")
    } else if(denominator === 0) {
        throw new Error("Error: denominator is 0!")
    }
    return numerator /denominator
}
//positive case
try {
    console.log(divideNumbers(10, 5));
} catch (error){
    console.error(error.message);
} finally {
    console.log("The work is complete!");
}
//denominator = 0
try {
    console.log(divideNumbers(10, 0));
} catch (error){
    console.error(error.message);
} finally {
    console.log("The work is complete!");
}
//incorrect typo of value
try {
    console.log(divideNumbers(10, 'yyy'));

} catch (error){
    console.error(error.message);
} finally {
    console.log("The work is complete!");
}