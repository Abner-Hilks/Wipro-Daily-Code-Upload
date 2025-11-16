import React from "react";

interface ProductProps {
  name: string;
  price: number;
  causeError?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, causeError }) => {
  if (causeError) {
    throw new Error(`Product "${name}" failed to render`);
  }

  return (
    <div className="card shadow-sm my-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-success fw-bold">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
