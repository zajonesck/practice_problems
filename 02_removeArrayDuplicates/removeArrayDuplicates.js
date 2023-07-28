export const removeDuplicate = (array) =>
  array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
