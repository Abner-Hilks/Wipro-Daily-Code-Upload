// header component
import React from "react";

function Header({ wishlistCount }) {
  return (
    <header className="bg-primary text-white text-center p-3">
      <h1>Traveling Mantra</h1>
      <p>Travel your dream destination</p>
      <span>Wishlist: {wishlistCount}</span>
    </header>
  );
}

export default Header;
