import React from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
  lastUpdated: string;
}

const StatsCard: React.FC<StatsCardProps> = React.memo(
  ({ title, value, lastUpdated }) => {
    console.log(`Rendering: ${title}`); // 🔍 for re-render tracking

    return (
      <div
        className="card p-3 m-2 shadow-sm"
        style={{
          width: "240px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
        }}
      >
        <h5 className="text-primary">{title}</h5>
        <h2 className="fw-bold">{value}</h2>
        <p className="text-muted small">Last updated: {lastUpdated}</p>
      </div>
    );
  }
);

export default StatsCard;
