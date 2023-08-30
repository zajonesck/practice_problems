let animalType = function (legs) {
  if (legs === 0) {
    return "Fish";
  } else if (legs === 2) {
    return "Bird";
  } else if (legs === 4) {
    return "Quadruped";
  } else if (legs === 6) {
    return "Insect";
  } else if (legs === 8) {
    return "Arachnid";
  } else return "Unknown Creature";
};

console.log("It's a " + animalType(2));
console.log("It's a " + animalType(8));
console.log("It's a " + animalType(5));
