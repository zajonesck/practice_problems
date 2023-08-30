const books = [
  { title: "Moby Dick", pages: 635 },
  { title: "To Kill a Mockingbird", pages: 198 },
  { title: "The Great Gatsby", pages: 180 },
  { title: "War and Peace", pages: 1225 },
  { title: "The Hobbit", pages: 310 },
];
let longBooks = [];

for (let i = 0; i < books.length; i++) {
  if (books[i].pages > 200) {
    longBooks.push(books[i].title);
  }
}

if (longBooks.length > 0) {
  console.log(`These books, ${longBooks.join(", ")}, are longer reads.`);
}
