import React from "react";

function GradientBtn({ children, className, onClick = () => {} }) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`gradient-btn bg-white relative text-center bg-clip-padding border-2 border-transparent inline-block leading-[100%] p-0 float-none m-0 rounded-[10px] pointer text-[12px] ${className}`}
    >
      <span>{children}</span>
    </button>
  );
}

export default GradientBtn;
