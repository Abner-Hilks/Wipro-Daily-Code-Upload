// navigation header
import React from "react";
import { Link } from "react-router-dom";

function Header({ wishlistCount }) {
  return (
    <header className="bg-primary text-white text-center p-3">
      <h1>Traveling Mantra</h1>
      <p>Travel your dream destination</p>
      <nav>
        <Link to="/home" className="text-white mx-2">Home</Link>
        <Link to="/packages" className="text-white mx-2">Packages</Link>
        <Link to="/contact" className="text-white mx-2">Contact</Link>
      </nav>
      <span>Wishlist: {wishlistCount}</span>
    </header>
  );
}

export default Header;
