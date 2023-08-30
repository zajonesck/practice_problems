const people = [
  { name: "John", age: 15 },
  { name: "Doe", age: 20 },
  { name: "Jane", age: 17 },
  { name: "Smith", age: 21 },
  { name: "Emily", age: 16 },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 18) {
    console.log(people[i].name);
  }
}
