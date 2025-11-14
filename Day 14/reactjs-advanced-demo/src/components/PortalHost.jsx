import React, { useEffect } from "react";

export default function PortalHost({ children }) {
  useEffect(() => {
    const portalRoot = document.createElement("div");
    portalRoot.id = "portal-root";
    document.body.appendChild(portalRoot);
    return () => document.body.removeChild(portalRoot);
  }, []);

  return <>{children}</>;
}
