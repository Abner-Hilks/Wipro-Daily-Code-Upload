import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import ContactUs from "./pages/ContactUs";
import UserNotFound from "./pages/UserNotFound";

function NotFound() {
  return <h2>❌ Page not found!</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navbar */}
        <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              marginRight: 12,
              color: isActive ? "blue" : "black",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              marginRight: 12,
              color: isActive ? "blue" : "black",
              textDecoration: "none",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              marginRight: 12,
              color: isActive ? "blue" : "black",
              textDecoration: "none",
            })}
          >
            Contact
          </NavLink>
          <NavLink
            to="/user/42"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
              textDecoration: "none",
            })}
          >
            User 42
          </NavLink>
        </nav>

        {/* Page Routes */}
        <main style={{ padding: 12 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user-not-found" element={<UserNotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
