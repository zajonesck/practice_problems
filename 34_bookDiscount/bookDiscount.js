const books = [
  { title: "The Great Gatsby", price: 20 },
  { title: "1984", price: 15 },
  { title: "Moby Dick", price: 25 },
  { title: "To Kill a Mockingbird", price: 10 },
  { title: "Brave New World", price: 18 },
];

const bookDiscount = books.map((book) => {
  if (book.price > 15) {
    return {
      title: book.title,
      price: book.price * 0.9,
    };
  }
  return book;
});

console.log(bookDiscount);
