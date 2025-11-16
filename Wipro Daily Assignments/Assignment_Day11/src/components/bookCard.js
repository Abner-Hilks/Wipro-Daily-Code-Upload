import React from "react";
import PropTypes from "prop-types";

function BookCard({ title, author, price, viewMode, onBookClick }) {
  return (
    <div
      className={`card m-2 shadow-sm ${
        viewMode === "Grid" ? "col-md-3" : "w-75 mx-auto"
      }`}
      style={{ cursor: "pointer" }}
      onClick={() => onBookClick(author)}
    >
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">by {author}</p>
        <p className="fw-bold">₹{price}</p>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  viewMode: PropTypes.string.isRequired,
  onBookClick: PropTypes.func.isRequired,
};

export default BookCard;
