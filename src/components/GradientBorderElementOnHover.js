import React from "react";

function GradientBorderElementOnHover({ children, className = "" }) {
  return (
    <div className={`gradient-item--on-hover ${className}`}>{children}</div>
  );
}

export default GradientBorderElementOnHover;
