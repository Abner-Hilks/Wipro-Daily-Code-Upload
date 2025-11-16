import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import withLoaderHOC from "./withLoaderHOC";
import bookStore from "../store/bookStore";
import BookActions from "../actions/bookActions";

function BookList() {
  const [books, setBooks] = useState(bookStore.getBooks());
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleChange = () => setBooks([...bookStore.getBooks()]);
    bookStore.on("change", handleChange);

    // Initial data fetch
    axios.get("http://localhost:3001/books").then((res) => {
      BookActions.loadBooks(res.data);
    });

    return () => {
      bookStore.removeListener("change", handleChange);
    };
  }, []);

  const handleFocus = () => inputRef.current.focus();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4 text-center fade-in">
      <h2 className="mb-3">Featured Books</h2>

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

      <div className="row justify-content-center mt-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="card m-3 col-md-3 shadow-sm"
            style={{ minWidth: "250px", maxWidth: "280px" }}
          >
            <img
              src={book.image}
              alt={book.title}
              className="card-img-top"
              style={{ height: "220px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{book.title}</h5>
              <p className="text-muted">{book.author}</p>
              <p className="fw-bold">₹{book.price}</p>
              <Link to={`/book/${book.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}

        {filteredBooks.length === 0 && (
          <p className="text-muted mt-3">No books found.</p>
        )}
      </div>

      <Link to="/add" className="btn btn-success mt-4">
        ➕ Add New Book
      </Link>
    </div>
  );
}

export default withLoaderHOC(BookList);
