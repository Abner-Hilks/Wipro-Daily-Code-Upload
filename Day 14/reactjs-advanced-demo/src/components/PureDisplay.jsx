import React from "react";

function PureDisplay({ title, count }) {
  console.log("PureDisplay re-rendered — title:", title, "count:", count);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px auto",
        width: "250px",
      }}
    >
      <h3>{title}</h3>
      <p>Count: {count}</p>
    </div>
  );
}

export default React.memo(PureDisplay);
