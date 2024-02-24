const car1 = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

const car2 = {
  brand: 'Honda',
  model: 'Civic',
  owner: 'Olga',
};
// console.log("Car 1:", car1);
// console.log("Car 2:", car2);

const car3 = { ...car1, ...car2 };
console.log('Car 3:', car3);
