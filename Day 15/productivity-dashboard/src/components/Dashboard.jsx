// src/components/Dashboard.jsx
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [tasks, setTasks] = useState([]);
  const [offline, setOffline] = useState(!navigator.onLine);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));

    // Listen for online/offline changes
    const handleOnline = () => setOffline(false);
    const handleOffline = () => setOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Example: mock tasks if none
  useEffect(() => {
    if (tasks.length === 0) {
      const demoTasks = [
        { id: 1, text: "Review tasks" },
        { id: 2, text: "Attend meetings" },
        { id: 3, text: "Learn new React concept" },
      ];
      setTasks(demoTasks);
      localStorage.setItem("tasks", JSON.stringify(demoTasks));
    }
  }, [tasks]);

  return (
    <main
      style={{
        padding: "20px",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        minHeight: "60vh",
      }}
    >
      <h3>Today's Productivity Goals</h3>

      {offline && (
        <p style={{ color: "orange" }}>
          ⚠ You are offline — showing last saved tasks.
        </p>
      )}

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </main>
  );
}
