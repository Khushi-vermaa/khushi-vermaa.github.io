import React from "react";

// ...existing code...
export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
