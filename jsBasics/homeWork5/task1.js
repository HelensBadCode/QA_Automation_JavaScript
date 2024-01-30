//function declaration
function calculationAreaOfRectangle(width, height){
    const result = width * height;
    return result;
}
console.log("The area of the rectangle :", calculationAreaOfRectangle(23, 16));
//----------------------------------------------------------------------------------------------------------------------

//function expression
const calculationAreaOfRectangle2 = function (width, height) {
    const result = width * height;
    return result;
}
console.log("The area of the rectangle :",calculationAreaOfRectangle2(26, 32));
//----------------------------------------------------------------------------------------------------------------------

//arrow function expression
const calculationAreaOfRectangle3 = (width, height) => {
    const result = width * height;
    return result;
}
console.log("The area of the rectangle :",calculationAreaOfRectangle3(33, 12));
