import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="text-center py-4" style={{ background: "#212122ff", color: "white" }}>
      <h1>Traveling Mantra</h1>
      <p>Travel your dream destination</p>

      {/* Navigation */}
      <nav style={{ fontSize: "20px" }}>
        {currentPath !== "/home" && <Link to="/home" className="mx-3 text-white">Home</Link>}
        {currentPath !== "/packages" && <Link to="/packages" className="mx-3 text-white">Packages</Link>}
        {currentPath !== "/contact" && <Link to="/contact" className="mx-3 text-white">Contact</Link>}
      </nav>
      
    </div>
  );
}

export default Header;
