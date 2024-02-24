class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;

    this.isPowerOn = false;
    this.isCarDriving = false;
    this.fuelVolume = 0;
  }

  drive() {
    if (this.fuelVolume <= 0) {
      return;
    }

    this.isPowerOn = true;
    this.isCarDriving = true;

    console.log(`${this.make} ${this.model} is driving.`);
  }
}

const car = new Car('Toyota', 'Camry');
car.drive();
car.fuelVolume = 50;
car.drive();
