import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button className="btn btn-danger mt-3" onClick={onClose}>
            Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
}
