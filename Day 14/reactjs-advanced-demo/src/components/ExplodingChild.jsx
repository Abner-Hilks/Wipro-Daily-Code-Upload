import React from "react";

export default function ExplodingChild({ explode, onReset }) {
  if (explode) throw new Error("ExplodingChild crashed intentionally!");

  return (
    <div
      style={{
        border: "1px dashed #aaa",
        borderRadius: "6px",
        padding: "10px",
        marginTop: "10px",
        background: "#fafafa",
        transition: "all 0.3s ease",
      }}
    >
      <p>Child component is running fine.</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
