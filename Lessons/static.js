// class MyMath {
//   static PI = 3;
//
//   static getCircleArea(radius) {
//     // можна викликати тільки з самого класу, але не з екземплярів
//     return radius * this.PI;
//   }
// }
//
// const math = new MyMath();
// // console.log(math.PI)//undefined
// console.log(MyMath.PI);
// console.log(MyMath.getCircleArea(10));

class DateTimeHelper {
  static getCurrentDay() {
    return new Date().getDate();
  }
}

console.log(DateTimeHelper.getCurrentDay());
