//function declaration
function rectangleAreaDeclaration(width, height){
    let result = width * height;
    return result;
}
console.log("The area of the rectangle :", rectangleAreaDeclaration(23, 16));
//----------------------------------------------------------------------------------------------------------------------

//function expression
const rectangleAreaExpression = function (width, height) {
    let result = width * height;
    return result;
}
console.log("The area of the rectangle :",rectangleAreaExpression(26, 32));
//----------------------------------------------------------------------------------------------------------------------

//arrow function expression
const rectangleAreaArrow = (width, height) => {
    let result = width * height;
    return result;
}
console.log("The area of the rectangle :",rectangleAreaArrow(33, 12));