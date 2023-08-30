let students = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 52 },
  { name: "Charlie", score: 58 },
  { name: "David", score: 49 },
  { name: "Eva", score: 65 },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 50) {
    console.log(students[i].name);
  }
}
