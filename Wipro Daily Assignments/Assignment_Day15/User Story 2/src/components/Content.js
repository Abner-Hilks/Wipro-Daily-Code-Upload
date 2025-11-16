import React from "react";

export default function Content() {
  return (
    <div className="content">
      <p>
        Try turning off your internet connection — this app will still load thanks to
        its service worker caching!
      </p>
      <p>
        We can install it from your browser to run it like a native app.
      </p>
    </div>
  );
}
