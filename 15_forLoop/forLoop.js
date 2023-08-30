const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(Math.pow(numbers[i], 2));
}

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let hops = [3, 2, 0, 1, 2];

let furthestReachable = 0;

for (let i = 0; i < hops.length; i++) {
  if (i > furthestReachable) {
    console.log("you cannot reach the end");
    break;
  }
  furthestReachable = Math.max(furthestReachable, i + hops[i]);

  if (furthestReachable >= hops.length - 1) {
    console.log("You reached the end");
    break;
  }
}
