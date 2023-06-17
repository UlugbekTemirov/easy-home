import React from "react";
import InputMask from "react-input-mask";

function TelMask({ className = "", onChange = () => {} }) {
  return (
    <InputMask
      className={`w-full font-[900] mb-4 text-[#415674] py-3 px-5 border-0 rounded-md focus:outline-none placeholder:text-[14px] placeholder:font-[700]  text-[14px] ${className}`}
      mask="+\9\98 99 999 99 99"
      placeholder="+998 90 123 45 67"
      onChange={onChange}
    />
  );
}

export default TelMask;
