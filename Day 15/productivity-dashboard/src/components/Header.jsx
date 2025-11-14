import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

// Displays name + theme indicator
export default function Header() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <header
      style={{
        padding: "10px",
        textAlign: "center",
        background: theme === "light" ? "#f4f4f4" : "#333",
        color: theme === "light" ? "#333" : "#f4f4f4",
      }}
    >
      <h2>Welcome, {user.isLoggedIn ? user.name : "Guest"} </h2>
      <small>Current Theme: {theme}</small>
    </header>
  );
}
