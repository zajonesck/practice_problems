function findTriplets(numbers, target) {
  let n = numbers.length;
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sumOfTwo = numbers[i] + numbers[j];
      let thirdNumber = target - sumOfTwo;

      if (numbers.slice(j + 1).includes(thirdNumber)) {
        console.log(`(${numbers[i]}, ${numbers[j]}, ${thirdNumber})`);
      }
    }
  }
}

const numbers = [2, 3, 5, 7, 8, 9];
const target = 20;

findTriplets(numbers, target);
