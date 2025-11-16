import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "./productsSlice";

export default function ProductEditor({ product }) {
  const [price, setPrice] = useState(product.price);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    const updated = { ...product, price: parseFloat(price) };
    dispatch(updateProduct(updated));
    alert(`Updated product "${product.title}" to $${price}`);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Price: ${price}</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Price</button>
    </div>
  );
}
