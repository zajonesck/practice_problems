export let containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      console.log("nums", nums[i], nums[i + 1]);
      return "is duplicate";
    }
  }

  return "is not duplicate";
};

console.log("[1, 3, 3] expected: is duplicate", containsDuplicate([1, 3, 3]));

console.log(
  "[1, 6, 2, 5, 7] expected: is not duplicate",
  containsDuplicate([1, 6, 2, 5, 7])
);

console.log(
  "[1,3,3,8] ecpected: is duplicate",
  containsDuplicate([1, 3, 3, 8])
);
