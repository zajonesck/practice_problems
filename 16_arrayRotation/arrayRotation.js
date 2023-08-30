function rotateArray(arr, k) {
  let n = arr.length;

  k = ((k % n) + n) % n;

  for (let rotation = 0; rotation < k; rotation++) {
    let temp = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = temp;
  }

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], -2));
