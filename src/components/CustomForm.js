import React from "react";
import Translate from "../utils/Translate";

function CustomForm({
  onSubmit = (e) => {
    e.preventDefault();
  },
  children,
  className = "",
  title = "",
}) {
  return (
    <form
      className={`py-[60px] px-[30px] md:px-[45px] bg-form  ${className}`}
      onSubmit={(e) => {
        e.target.reset();
        onSubmit(e);
      }}
    >
      <h1 className="text-3xl font-bold mb-5">
        <Translate dictionary={title} />
      </h1>
      {children}
    </form>
  );
}

export default CustomForm;
