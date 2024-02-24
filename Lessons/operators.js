// || OR повертає перше правдиве значення
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log(true || true);

// false, 0, null, undefined, NaN, "", -> false
// console.log(false || 1);
// console.log(0/0);//Nan
// console.log(10/0);//Infinity

// console.log(1 || NaN);
//           //1 - true || false

// && AND повертає перше неправдиве значення
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log(true && true);//поветає останнє - якщо 2 однакових
// console.log(0 && 1);
//            //false && true

// const isMarried = true;
// const hasChildren = false;
// const personAge = 22;
// const userExperiences = 2;
// let shouldNaveBonus = isMarried || hasChildren;
// console.log("Result 1 :", shouldNaveBonus);
// shouldNaveBonus = (isMarried && hasChildren) || (personAge > 21 && userExperiences > 1);
// console.log("Result 2 :", shouldNaveBonus);

//! NOT
// console.log(!false);
// console.log(!true);
// console.log(!1);
// console.log(!undefined);
// console.log(!!undefined);

// ?? - оператор нульового злиття
// console.log(1 ?? 0);//повертається перший операнд
// console.log(false ?? 0);
// console.log(null ?? 0);//повертається 2 операнд if null/ undefined

// Тернарний оператор
// const isMarried = true;
// console.log(isMarried ? "Married" : "Single")
// const experience = 3;
// const isSenior = experience > 5;
// const salary = experience > 3 ? 3000 : 2000;
// console.log(salary)

// type var - неявно
// const something = 1 +"10";
// console.log(typeof something);
// console.log("111" + true);//string
// console.log("test" + null);//string
// console.log("111" - 1);//number
// console.log(typeof ("111" - 1));//number "-, *, /"
// console.log("111" - true);//true = 1, false = 0;
// console.log("111" * null);

// type var - явно
// console.log(Number("111") + 1);//number
// console.log(Number("111a") + 1);//NaN
// console.log(Number.parseInt("111a") + 1);//number

// console.log(Number("111") + 1);
// console.log(+"111"+ 1);
// console.log(1 + + "123");
// console.log(1 + String(true));
// console.log(Boolean(1111));
// console.log(!!1);
