import React from "react";

function RenderMessage({ render }) {
  const user = "Arpit";
  return <div className="text-center mt-2">{render(user)}</div>;
}

export default RenderMessage;
