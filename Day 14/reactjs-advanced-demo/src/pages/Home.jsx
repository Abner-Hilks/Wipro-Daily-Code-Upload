import React from "react";

export default function Home({ onSelectSection }) {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>React Optimization Demo</h1>
      <p>
        Explore modern React performance and reliability features below.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => onSelectSection("lazy")}>Lazy Load</button>
        <button onClick={() => onSelectSection("pure")} style={{ marginLeft: "10px" }}>
          Pure Component
        </button>
        <button onClick={() => onSelectSection("error")} style={{ marginLeft: "10px" }}>
          Error Boundary
        </button>
        <button onClick={() => onSelectSection("portal")} style={{ marginLeft: "10px" }}>
          Portal (Modal)
        </button>
      </div>

      <p style={{ marginTop: "40px", fontSize: "14px", color: "#666" }}>
        Select a topic to see the example implementation.
      </p>
    </div>
  );
}
