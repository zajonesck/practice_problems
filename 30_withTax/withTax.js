const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];

const withTax = products.map((product) => ({
  ...product,
  priceWithTax: product.price * 1.2,
}));

console.log(withTax);
