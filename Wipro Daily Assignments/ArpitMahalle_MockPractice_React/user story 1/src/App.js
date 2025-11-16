// main application file
import React, { useState } from "react";
import Header from "./components/Header";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // track wishlist items
  const [wishlistCount, setWishlistCount] = useState(0);

  // destination data with fixed working URLs
  const destinations = [
    {
      id: 1,
      name: "Taj Mahal",
      price: "₹9999",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Sikkim",
      price: "₹14499",
      image: "https://www.nomllers.com/wp-content/uploads/2017/06/abhishek-singh-xJDJ4PxkHvU-unsplash-scaled.webp",
    },
    {
      id: 3,
      name: "Kashmir",
      price: "₹14999",
      image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/01/15134609/kashmir-deepanshu-nayak.jpeg?tr=w-1200,q-60",
    },
  ];

  // wishlist increment function
  const handleWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  };

  return (
    <div className="container-fluid p-0">
      {/* header */}
      <Header wishlistCount={wishlistCount} />

      {/* destination showcase */}
      <div className="container my-4">
        <h3 className="text-center mb-4">Featured Destinations</h3>
        <div className="row">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              name={dest.name}
              price={dest.price}
              image={dest.image}
              onAdd={handleWishlist}
            />
          ))}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
