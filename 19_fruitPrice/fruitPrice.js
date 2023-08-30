const products = [
  { name: "apple", price: 5 },
  { name: "banana", price: 12 },
  { name: "orange", price: 7 },
  { name: "grape", price: 15 },
  { name: "mango", price: 9 },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price < 10) {
    console.log(products[i].name);
  }
}
