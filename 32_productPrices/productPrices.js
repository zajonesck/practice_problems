const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Watch", price: 200 },
  { name: "Headphones", price: 50 },
];

const discountedProducts = products.map((product) => {
  return {
    name: product.name,
    price: product.price * 0.9,
  };
});

console.log(discountedProducts);
