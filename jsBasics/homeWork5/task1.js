//function declaration
function calculateRectangleArea(width, height){
    const result = width * height;
    return result;
}
console.log("The area of the rectangle :", calculateRectangleArea(23, 16));
//----------------------------------------------------------------------------------------------------------------------

//function expression
const calculateRectangleArea2 = function (width, height) {
    const result = width * height;
    return result;
}
console.log("The area of the rectangle :",calculateRectangleArea2(26, 32));
//----------------------------------------------------------------------------------------------------------------------

//arrow function expression
const calculateRectangleArea3 = (width, height) => {
    const result = width * height;
    return result;
}
console.log("The area of the rectangle :",calculateRectangleArea3(33, 12));
