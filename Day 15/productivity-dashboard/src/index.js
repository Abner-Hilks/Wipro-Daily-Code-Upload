import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Root rendering
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// Register service worker for offline
serviceWorkerRegistration.register();
