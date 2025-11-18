import React from "react";
import { useNavigate } from "react-router-dom";

function DestinationCard({ name, price, duration, image }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4 d-flex">
      <div className="card shadow-sm travel-card w-100">

        {/* Fixed Height Image */}
        <img src={image} alt={name} className="travel-img" />

        {/* Fixed Height Body */}
        <div className="card-body travel-body">
          <h5 className="travel-title fw-bold">{name}</h5>
          <p className="text-muted">{duration}</p>
          <p className="fw-bold text-primary">{price}</p>

          {/* Button at the bottom always */}
          <button
            className="btn btn-primary w-100 travel-btn"
            onClick={() => navigate(`/booking?package=${encodeURIComponent(name)}`)}
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default DestinationCard;
