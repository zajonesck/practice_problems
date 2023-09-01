const students = [
  { name: "Alan", score: 85 },
  { name: "Brad", score: 90 },
  { name: "Claire", score: 78 },
  { name: "Dana", score: 88 },
  { name: "Eve", score: 92 },
];

const studentBonus = students.map((student) => {
  return {
    name: student.name,
    score: student.score * 1.05,
  };
});
console.log(studentBonus);
