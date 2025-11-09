import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserNotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Not Found</h2>
      <p>The user you are looking for does not exist.</p>
      <button onClick={() => navigate(-1)}>🔙 Go Back</button>
      <button style={{ marginLeft: 8 }} onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}
