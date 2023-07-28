export function findMissingNumber(arrayOfNumbers) {
  arrayOfNumbers.sort(function(a, b){return a-b});

  if (oneIsMissing(arrayOfNumbers)) {
    return 1;
  }
  let missingNumber;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayJumpedByMoreThanOneDigit(arrayOfNumbers, i)) {
      missingNumber = arrayOfNumbers[i] - 1;
      break;
    }
    if (lastNumberIsMissing(arrayOfNumbers, i)) {
      missingNumber = arrayOfNumbers[i] + 1;
      break;
    }
  }
  return missingNumber;
}

function oneIsMissing(arrayOfNumbers) {
  return arrayOfNumbers[0] > 1;
}

function arrayJumpedByMoreThanOneDigit(arrayOfNumbers, i) {
  return arrayOfNumbers[i] > i + 1
}

function lastNumberIsMissing(arrayOfNumbers, i) {
  return i === arrayOfNumbers.length - 1;
}
