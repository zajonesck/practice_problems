const students = [
  { name: "Alice", scores: { Math: 90, English: 85, Science: 87 } },
  { name: "Bob", scores: { Math: 82, English: 90, Science: 78 } },
  { name: "Charlie", scores: { Math: 85, English: 85, Science: 85 } },
  { name: "David", scores: { Math: 90, English: 92, Science: 94 } },
  { name: "Eve", scores: { Math: 70, English: 75, Science: 80 } },
];
for (let i = 0; i < students.length; i++) {
  let sum = 0;
  let scores = Object.values(students[i].scores);

  for (let j = 0; j < scores.length; j++) {
    sum += scores[j];
  }
  if (sum / scores.length > 85) {
    console.log(students[i].name);
  }
}
