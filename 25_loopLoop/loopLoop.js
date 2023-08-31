function findPairs(list1, list2, target) {
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] + list2[j] === target) {
        console.log(list1[i] + " + " + list2[j] + " = " + target);
      }
    }
  }
}

const list1 = [1, 2, 3, 4, 5];
const list2 = [10, 9, 8, 7, 6];
const target = 11;

findPairs(list1, list2, target);
