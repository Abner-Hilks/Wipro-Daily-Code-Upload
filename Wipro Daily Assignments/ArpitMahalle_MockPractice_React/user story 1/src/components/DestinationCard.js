// reusable destination card
import React from "react";

function DestinationCard({ name, price, image, onAdd }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Starting from {price}</p>
          {/* event handler for wishlist */}
          <button onClick={onAdd} className="btn btn-outline-primary w-100">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
