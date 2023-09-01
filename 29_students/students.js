const students = [
  { name: "Alex", scores: [85, 90, 88] },
  { name: "Brian", scores: [82, 84, 86] },
  { name: "Catherine", scores: [88, 87, 85] },
  { name: "Derek", scores: [90, 89, 91] },
  { name: "Ella", scores: [78, 80, 76] },
];

function calculateAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

for (let i = 0; i < students.length; i++) {
  let student1 = students[i];
  let average1 = calculateAverage(student1.scores);

  for (let j = i + 1; j < students.length; j++) {
    let student2 = students[j];
    let average2 = calculateAverage(student2.scores);

    if (Math.abs(average1 - average2) <= 2) {
      console.log(
        student1.name + " and " + student2.name + " have close averages."
      );
    }
  }
}
