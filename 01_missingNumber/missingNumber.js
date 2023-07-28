export const findMissingNumber = (array) => {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!array.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
};
