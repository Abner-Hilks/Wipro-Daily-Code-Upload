// challenge5/routes/books.js
const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "1984", author: "Orwell" },
  { id: 2, title: "The Alchemist", author: "Coelho" }
];

router.get("/", (req, res) => res.json(books));
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const b = books.find(x => x.id === id);
  if (!b) return res.status(404).json({ error: "Book not found" });
  res.json(b);
});
router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: "Title and author required" });
  const newBook = { id: books.length ? Math.max(...books.map(b => b.id)) + 1 : 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  const { title, author } = req.body;
  book.title = title ?? book.title;
  book.author = author ?? book.author;
  res.json(book);
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const before = books.length;
  books = books.filter(b => b.id !== id);
  if (books.length === before) return res.status(404).json({ error: "Book not found" });
  res.json({ message: "Book deleted" });
});

module.exports = router;
