const cars = [
  { brand: "Toyota", model: "Camry", year: 1995, price: 8000 },
  { brand: "Ford", model: "Mustang", year: 2005, price: 15000 },
  { brand: "Honda", model: "Civic", year: 1998, price: 6000 },
  { brand: "Chevrolet", model: "Camaro", year: 2001, price: 12000 },
  { brand: "Nissan", model: "Altima", year: 1996, price: 9000 },
];

for (let i = 0; i < cars.length; i++) {
  if (cars[i].year < 2000 && cars[i].price < 10000) {
    console.log(cars[i].brand + " " + cars[i].model);
  }
}
