import React from "react";

export default function HeavyPage() {
  const text = new Array(20)
    .fill("This is a heavy component loaded lazily.")
    .join(" ");
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h3>Heavy Page (Lazy Loaded)</h3>
      <p>{text}</p>
      <img src="https://picsum.photos/600/200" alt="Lazy loaded example" />
    </div>
  );
}
