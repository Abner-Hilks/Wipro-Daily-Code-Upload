// src/components/Content.js
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`content ${theme}`}>
      <p>
        Current theme is <strong>{theme}</strong>.  
        This text automatically updates when theme changes.
      </p>
    </main>
  );
}
