import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h2>Home</h2>
      <p>Welcome! Navigate between pages to see transitions.</p>
      <Link to="/user/42">View User 42</Link>
    </div>
  );
}
