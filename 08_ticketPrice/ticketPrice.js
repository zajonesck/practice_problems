let ticketPrice = function (age) {
  if (age >= 60) {
    return "Price is $6";
  } else if (age <= 12) {
    return "Price is $5";
  } else if (age <= 19 && age >= 13) {
    return "Price is $7";
  } else {
    return "Price is $10";
  }
};

console.log(ticketPrice(15));
console.log(ticketPrice(65));
