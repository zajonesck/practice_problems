const list1 = ["ab", "bat", "car", "rac"];
const list2 = ["ba", "tab", "tar", "apple"];

function reverseString(str) {
  const arrayStrings = str.split("");

  const reverseArray = arrayStrings.reverse();

  const joinArray = reverseArray.join("");

  return joinArray;
}

for (let i = 0; i < list1.length; i++) {
  for (let j = 0; j < list2.length; j++) {
    if (list1[i] === reverseString(list2[j])) {
      console.log(list1[i] + list2[j]);
    }
  }
}
