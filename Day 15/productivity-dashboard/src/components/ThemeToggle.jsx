import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Switches between light/dark mode
export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
