import React, { useState } from "react";
import StatsCard from "./components/StatsCard";
import "bootstrap/dist/css/bootstrap.min.css";

interface Stat {
  title: string;
  value: number | string;
  lastUpdated: string;
}

const App: React.FC = () => {
  const [stats, setStats] = useState<Stat[]>([
    { title: "Users", value: 120, lastUpdated: "2 mins ago" },
    { title: "Sales", value: 350, lastUpdated: "5 mins ago" },
    { title: "Revenue", value: "$12,000", lastUpdated: "10 mins ago" },
  ]);

  const simulateUpdate = () => {
    setStats((prev) =>
      prev.map((item) =>
        item.title === "Sales"
          ? { ...item, value: (item.value as number) + 10, lastUpdated: "Just now" }
          : item
      )
    );
  };

  return (
    <div className="container text-center py-4">
      <h2 className="text-success mb-3">Pure Component Optimization Demo</h2>
      <p className="text-muted">
        Only updated card re-renders here.
      </p>

      <div className="d-flex justify-content-center flex-wrap">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            lastUpdated={stat.lastUpdated}
          />
        ))}
      </div>

      <button className="btn btn-primary mt-3" onClick={simulateUpdate}>
        Simulate Update (Sales +10)
      </button>
    </div>
  );
};

export default App;
