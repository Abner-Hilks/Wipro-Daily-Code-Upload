import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ThemeToggle from "./components/ThemeToggle";

// App wrapped in both providers
export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="app-container">
          <Header />
          <Dashboard />
          <ThemeToggle />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
