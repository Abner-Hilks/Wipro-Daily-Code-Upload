import React, { useState } from "react";
import Modal from "./components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4 text-primary">React Portals Demo</h2>
      <p>
        Click the button to open a modal rendered <strong>outside</strong> the main DOM hierarchy.
      </p>

      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h4>Modal Window</h4>
        <p>This content is rendered via <strong>React Portal</strong> ✨</p>
      </Modal>
    </div>
  );
}
