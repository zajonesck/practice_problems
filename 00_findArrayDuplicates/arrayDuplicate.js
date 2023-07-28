const array = [1, 2, 1, 3, 4, 3, 5];

export const findDuplicate = (array) =>
  array.filter((item, index) => array.indexOf(item) !== index);
const duplicateElements = findDuplicate(array);
