let removeElement = function (nums, val) {
  console.log("called");
  if (nums.length === 0) {
    return 0;
  }
  let k = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) {
      break;
    }
    if (nums[i] === val) {
      delete nums[i];
      nums.push(nums.splice(i, 1)[0]);
      i--;
      k--;
    }
  }
  console.log("k", k);
  console.log("nums", nums);
  return k;
};
removeElement([3, 2, 2, 3], 3);
