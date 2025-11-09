import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserNotFound() {
  const navigate = useNavigate();
  return (
    <div className="page error">
      <h2>User Not Found</h2>
      <p>The user you’re looking for does not exist.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}
