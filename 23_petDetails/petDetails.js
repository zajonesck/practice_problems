const pets = [
  { name: "Fluffy", age: 4, weight: 12 },
  { name: "Spark", age: 7, weight: 9 },
  { name: "Rex", age: 6, weight: 15 },
  { name: "Coco", age: 3, weight: 6 },
  { name: "Buddy", age: 8, weight: 11 },
];
for (let i = 0; i < pets.length; i++) {
  if (pets[i].age > 5 && pets[i].weight > 10) {
    console.log(pets[i].name);
  }
}
