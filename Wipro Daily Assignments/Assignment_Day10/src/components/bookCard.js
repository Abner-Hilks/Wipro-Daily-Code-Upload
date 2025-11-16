import React from "react";

function BookCard({ title, author, price, viewMode }) {
  const cardStyle = {
    border: "1px solid #504949ff",
    borderRadius: "10px",
    padding: "12px",
    margin: "10px",
    width: viewMode === "Grid" ? "200px" : "90%",
    display: "flex",
    flexDirection: viewMode === "Grid" ? "column" : "row",
    alignItems: viewMode === "Grid" ? "center" : "flex-start",
    justifyContent: "space-between",
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>
    </div>
  );
}

export default BookCard;
