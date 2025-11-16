import React, { useState } from "react";
import BookCard from "./bookCard";

function BookList() {
  const [viewMode, setViewMode] = useState("Grid");
  const [search, setSearch] = useState("");

  const books = [
    { title: "The Monk who sold his Ferrari", author: "Robin Sharma", price: 299 },
    { title: "The Alchemist", author: "Paulo Coelho", price: 350 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki and Sahron Lechter", price: 450 },
    { title: "Think & Grow Rich", author: "Napoleon Hill", price: 250 },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 599 },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>BookVerse: Welcome Page and Featured Books Section</h1>

      {/* Controlled Component */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search books..."
        style={{
          margin: "10px",
          padding: "8px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #726f6fff",
        }}
      />

      {/* Toggle Button */}
      <button
        onClick={() => setViewMode(viewMode === "Grid" ? "List" : "Grid")}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          backgroundColor: "#05161dff",
          color: "#f3dedeff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Switch to {viewMode === "Grid" ? "List" : "Grid"} View
      </button>

      {/* Display Books */}
      <div
        style={{
          display: "flex",
          flexDirection: viewMode === "Grid" ? "row" : "column",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {filteredBooks.map((book, index) => (
          <BookCard key={index} {...book} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
