let shippingCosts = function (weight, region) {
  let base = 5 + (weight - 1) * 2;
  if (region === "North") {
    return base * 1.1;
  } else if (region === "South") {
    return base * 1.05;
  } else if (region === "East") {
    return base * 1.15;
  } else if (region === "West") {
    return base * 1.07;
  } else {
    return "Shipping to " + region + " is not available.";
  }
};
console.log(shippingCosts(1, "North"));
console.log(shippingCosts(1, "South"));
console.log(shippingCosts(1, "East"));
console.log(shippingCosts(1, "West"));
console.log(shippingCosts(1, "dogville"));
