import React, { useState, useEffect, lazy, Suspense } from "react";
import Home from "./pages/Home";
import PureDisplay from "./components/PureDisplay";
import ErrorBoundary from "./components/ErrorBoundary";
import ExplodingChild from "./components/ExplodingChild";
import ModalPortal from "./components/ModalPortal";

const HeavyPage = lazy(() => import("./pages/HeavyPage"));

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Lazy Loading
  const [showHeavy, setShowHeavy] = useState(false);

  // Pure Component
  const [timer, setTimer] = useState(0);
  const [pureProps, setPureProps] = useState({ title: "Stable Title", count: 0 });
  const [pureTriggered, setPureTriggered] = useState(false);

  // Error Boundary
  const [explode, setExplode] = useState(false);

  // Portal
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const changeTitle = () => {
    setPureTriggered(true);
    setPureProps((prev) => ({
      ...prev,
      title: prev.title === "Stable Title" ? "Changed Title" : "Stable Title",
    }));
    setTimeout(() => setPureTriggered(false), 1500);
  };

  const incrementCount = () => {
    setPureTriggered(true);
    setPureProps((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
    setTimeout(() => setPureTriggered(false), 1500);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "lazy":
        return (
          <section>
            <button onClick={() => setActiveSection("home")}>⬅ Back</button>
            <h2>Lazy Loading & Code Splitting</h2>
            <p>Click below to dynamically load a heavy page.</p>
            <button onClick={() => setShowHeavy((prev) => !prev)}>
              {showHeavy ? "Hide Heavy Page" : "Load Heavy Page"}
            </button>
            {showHeavy && (
              <Suspense fallback={<p>Loading heavy content...</p>}>
                <HeavyPage />
              </Suspense>
            )}
          </section>
        );

      case "pure":
        return (
          <section>
            <button onClick={() => setActiveSection("home")}>⬅ Back</button>
            <h2>Pure Component Demo</h2>
            <p>Parent Timer: {timer}</p>

            <PureDisplay title={pureProps.title} count={pureProps.count} />

            <div style={{ marginTop: "10px" }}>
              <button onClick={changeTitle}>Change Title</button>
              <button onClick={incrementCount} style={{ marginLeft: "10px" }}>
                Increment Count
              </button>
            </div>

            {pureTriggered && (
              <div style={{ marginTop: "20px" }}>
                <img
                  src="https://picsum.photos/seed/pure/300/200"
                  alt="Pure Component Update"
                  style={{
                    width: "400px",
                    borderRadius: "8px",
                    boxShadow: "0 0 5px rgba(0,0,0,0.3)",
                  }}
                />
                <p style={{ fontSize: "13px", color: "#555" }}>
                  Pure Component updated after prop change.
                </p>
              </div>
            )}
          </section>
        );

      case "error":
        return (
          <section>
            <button onClick={() => setActiveSection("home")}>⬅ Back</button>
            <h2>Error Boundary Demo</h2>
            <p>
              Click “Cause Error” to simulate a crash. The ErrorBoundary will catch it safely.
            </p>
            <button onClick={() => setExplode(true)}>Cause Error</button>
            <ErrorBoundary onReset={() => setExplode(false)}>
              <ExplodingChild explode={explode} onReset={() => setExplode(false)} />
            </ErrorBoundary>

            {explode && (
              <div style={{ marginTop: "20px" }}>
                <img
                  src="https://picsum.photos/seed/error/300/200"
                  alt="Error Illustration"
                  style={{
                    width: "400px",
                    borderRadius: "8px",
                    filter: "grayscale(0.7)",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  }}
                />
                <p style={{ color: "red" }}>
                  Component crashed — ErrorBoundary caught it gracefully.
                </p>
              </div>
            )}
          </section>
        );

      case "portal":
        return (
          <section>
            <button onClick={() => setActiveSection("home")}>⬅ Back</button>
            <h2>Portal (Modal)</h2>
            <p>This demonstrates rendering a modal outside the main DOM hierarchy.</p>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>

            <ModalPortal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <div style={{ padding: 20, textAlign: "center" }}>
                <h3>Portal Modal Example</h3>
                <img
                  src="https://picsum.photos/seed/modal/300/250"
                  alt="Portal Modal"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                  }}
                />
                <p>This modal is rendered inside #modal-root using React Portal.</p>
                <button onClick={() => setModalOpen(false)}>Close</button>
              </div>
            </ModalPortal>
          </section>
        );

      default:
        return <Home onSelectSection={setActiveSection} />;
    }
  };

  return <div style={{ textAlign: "center", padding: "20px" }}>{renderSection()}</div>;
}
