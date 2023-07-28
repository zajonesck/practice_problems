export const findDuplicate = (array) => {
  return array.filter((item, index) => array.indexOf(item) !== index);
};
