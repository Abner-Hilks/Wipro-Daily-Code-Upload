import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNotFound = () => navigate("/usernotfound");

  return (
    <div className="page">
      <h2>User Profile</h2>
      <p>Currently viewing user with ID: {id}</p>
      <button onClick={() => navigate("/")}>Go Home</button>
      <button style={{ marginLeft: 8 }} onClick={handleNotFound}>
        Simulate User Not Found
      </button>
    </div>
  );
}
