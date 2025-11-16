const express = require("express");
const app = express();

app.use(express.json()); // allow JSON body

let books = [
  { id: 1, title: "1984", author: "Orwell" },
  { id: 2, title: "The Alchemist", author: "Coelho" }
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET book by ID
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const b = books.find(x => x.id === id);
  if (!b) return res.status(404).json({ error: "Book not found" });
  res.json(b);
});

// POST new book 
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author)
    return res.status(400).json({ error: "Title and author are required" });

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  book.title = title ?? book.title;
  book.author = author ?? book.author;

  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
