import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import ProductCard from "./components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-3">Error Boundary Demo</h2>
      <p className="text-secondary">
        The app displays a friendly fallback message instead of crashing when a
        component fails.
      </p>

      <div className="row">
        <div className="col-md-4">
          <ErrorBoundary>
            <ProductCard name="Laptop" price={60000} />
          </ErrorBoundary>
        </div>
        <div className="col-md-4">
          <ErrorBoundary>
            <ProductCard name="Smartphone" price={15000} causeError={true} />
          </ErrorBoundary>
        </div>
        <div className="col-md-4">
          <ErrorBoundary>
            <ProductCard name="Headphones" price={150} />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
