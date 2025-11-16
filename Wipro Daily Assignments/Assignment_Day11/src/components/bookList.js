import React, { useState, useRef } from "react";
import BookCard from "./bookCard";
import AuthorInfo from "./authorInfo";

function BookList() {
  const [viewMode, setViewMode] = useState("Grid");
  const [search, setSearch] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const inputRef = useRef(null); // Uncontrolled component ref

  const books = [
    { title: "The Monk who sold his Ferrari", author: "Robin Sharma", price: 299 },
    { title: "The Alchemist", author: "Paulo Coelho", price: 350 },
    { title: "Rcih Dad Poor Dad", author: "Robert Kiyosaki and Sharon Lechter", price: 450 },
    { title: "Think And Grow Rich", author: "Napoleon Hill", price: 250 },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 599 },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleBookClick = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4">BookVerse: Featured Books & Author details</h1>

      {/* Search Input + Focus Button */}
      <div className="mb-3">
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search books..."
          className="form-control w-50 mx-auto"
        />
        <button
          onClick={handleFocus}
          className="btn btn-outline-primary mt-2"
        >
          Focus on Search
        </button>
      </div>

      {/* Toggle View */}
      <button
        onClick={() => setViewMode(viewMode === "Grid" ? "List" : "Grid")}
        className="btn btn-primary mb-4"
      >
        Switch to {viewMode === "Grid" ? "List" : "Grid"} View
      </button>

      {/* Book Display */}
      <div className={`row justify-content-center ${viewMode === "Grid" ? "" : "flex-column align-items-center"}`}>
        {filteredBooks.map((book, index) => (
          <BookCard
            key={index}
            {...book}
            viewMode={viewMode}
            onBookClick={handleBookClick}
          />
        ))}
      </div>

      {/* Author Info (Composable Component) */}
      {selectedAuthor && (
        <AuthorInfo author={selectedAuthor} />
      )}
    </div>
  );
}

export default BookList;
