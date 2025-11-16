import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.error("Error fetching book details:", err);
        setError("Book not found or server not running");
      });
  }, [id]);

  if (error)
    return (
      <div className="text-center mt-5">
        <p className="text-danger">{error}</p>
        <Link to="/home" className="btn btn-outline-secondary">
          ← Back to Home
        </Link>
      </div>
    );

  if (!book)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3 text-muted">Loading book details...</p>
      </div>
    );

  return (
    <div className="container mt-5 fade-in">
      <div
        className="card shadow-sm mx-auto"
        style={{ maxWidth: "600px", borderRadius: "12px" }}
      >
        <img
          src={book.image}
          alt={book.title}
          className="card-img-top"
          style={{ height: "350px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{book.title}</h3>
          <h5 className="text-muted">{book.author}</h5>
          <p className="mt-3">{book.description}</p>
          <h5 className="fw-bold text-success">Price: ₹{book.price}</h5>
          <Link to="/home" className="btn btn-outline-secondary mt-3">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
