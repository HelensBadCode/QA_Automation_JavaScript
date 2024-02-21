class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

class Anime extends Animal{}

const cat = new Cat();
const dog = new Dog();
const anime = new Anime();
anime.makeSound();

const animals = [cat, dog];
animals.forEach((animal) => animal.makeSound());