const software = [
  { name: "AppA", rating: 4.5, price: 100 },
  { name: "AppB", rating: 3.8, price: 50 },
  { name: "AppC", rating: 4.9, price: 150 },
  { name: "AppD", rating: 3.2, price: 80 },
  { name: "AppE", rating: 4.1, price: 120 },
];

const highRatedApps = software.filter((app) => app.rating >= 4);

console.log(highRatedApps);
// This will return a new array with apps having a rating of 4 or higher.
