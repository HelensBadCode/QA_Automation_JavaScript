// //inherritance (прототипне наслідування)
// // Створення об'єкта "прототипу"
// const animalPrototype = {
//     speak() {
//         console.log(`Speaking from dog prototype ${this.name} says ${this.sound}`);
//     }
// };
//
// // Створення об'єкта, який успадковує прототип
// const dog1 = {
//     name: "Dog",
//     sound: "Woof",
//     // speak() {
//     //     console.log(`Speaking from dog object: ${this.name} says ${this.sound}`);
//     // }
// };
// dog1.__proto__ = animalPrototype;
//
// // Виклик методу від успадкованого прототипу
// dog1.speak(); //спочатку шукає в об'єкті dog, потім в прототипі
//
// // class
// class Animal {
//     constructor(name, sound) {
//         this.name = name;
//         this.sound = sound;
//     }
//
//     speak() {
//         console.log(`${this.name} says ${this.sound}`);
//     }
// }
//
// class Dog extends Animal {
//     constructor(name) {
//         super(name, "Woof");
//     }
// }
//
// const dog2 = new Dog("Dog");
// dog2.speak();
// console.log(dog2);
// console.log(dog2.hasOwnProperty("name"));


// //methods
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
//
//     draw() {
//         console.log(`Drawing from Shape: ${this.color} color.`);
//     }
// }
//
// class Circle extends Shape {
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }
//
//     printInfo() {
//         console.log(`INFO: Radius : ${this.radius}, color: ${this.color}`);
//     }
//
// draw() {
//     // super.draw()
//     console.log(`Drawing from Circle: ${this.color} color and radius ${this.radius}.`);
//   }
// }
//
// const circle = new Circle('blue', 5);
// circle.draw();

// коли можна не прописувати конструктор
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

class MyCat extends Animal {}

const myCat = new MyCat("Tom", "Toyota");
myCat.speak();


class Cat extends Animal {
    constructor(name) {
        super(name, "Meow");
        this.color = "black"
    }
}

const cat = new Cat("Tom")
cat.speak()


class WildCat extends Cat {
    constructor(name) {
        super(name);
        // this.sound = "Hrrrrr"
    }

    speak() {
        console.log(`${this.name} says Zrada`);
    }
}

const panther = new WildCat("Musya")
panther.speak()

