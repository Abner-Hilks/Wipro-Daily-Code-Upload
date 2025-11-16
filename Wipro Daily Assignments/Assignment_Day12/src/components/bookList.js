import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import withLoaderHOC from "./withLoaderHOC";

function BookList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  // Fetch books from backend
  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  // Focus ref (Uncontrolled Component)
  const handleFocus = () => inputRef.current.focus();

  // Filter search results
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4 text-center fade-in">
      <h2 className="mb-3">Featured Books</h2>

      {/* Search bar */}
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search books..."
        className="form-control w-50 mx-auto"
      />
      <button onClick={handleFocus} className="btn btn-outline-primary mt-2">
        Focus on Search
      </button>

      {/* Book Grid */}
      <div className="row justify-content-center mt-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="card m-3 col-md-3 shadow-sm"
            style={{ minWidth: "250px", maxWidth: "280px" }}
          >
            {/* Book Image */}
            <img
              src={book.image}
              alt={book.title}
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />

            {/* Card Content */}
            <div className="card-body text-center">
              <h5 className="card-title">{book.title}</h5>
              <p className="text-muted">{book.author}</p>
              <p className="fw-bold">₹{book.price}</p>

              {/* Navigation to Book Details */}
              <Link to={`/book/${book.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}

        {/* No results message */}
        {filteredBooks.length === 0 && (
          <p className="text-muted mt-3">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default withLoaderHOC(BookList);
