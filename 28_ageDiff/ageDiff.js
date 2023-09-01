const list = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
  { name: "Eve", age: 27 },
];

for (let i = 0; i < list.length; i++) {
  for (let j = i + 1; j < list.length; j++) {
    if (list[i].age - list[j].age === 5 || list[i].age - list[j].age === -5) {
      console.log(
        list[i].name + " and " + list[j].name + " are excatly 5 years apart."
      );
    }
  }
}
