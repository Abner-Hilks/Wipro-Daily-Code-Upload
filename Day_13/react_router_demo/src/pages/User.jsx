import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example: Only allow numeric user IDs from 1–50
  const isValidUser = !isNaN(id) && Number(id) >= 1 && Number(id) <= 50;

  if (!isValidUser) {
    navigate("/user-not-found");
    return null;
  }

  return (
    <div>
      <h2>User: {id}</h2>
      <p>
        This page reads the <code>id</code> from the URL using <code>useParams()</code>.
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button style={{ marginLeft: 8 }} onClick={() => navigate("/")}>Go home</button>
    </div>
  );
}
