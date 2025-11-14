import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ModalPortal({ isOpen, onClose, children }) {
  const modalRoot =
    typeof document !== "undefined" ? document.getElementById("modal-root") : null;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        animation: "fadeIn 0.3s ease-in-out",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "20px",
          minWidth: "320px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          position: "relative",
          animation: "slideUp 0.3s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(15px); opacity: 0.9; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>,
    modalRoot
  );
}
