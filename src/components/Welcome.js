import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [animation, setAnimation] = useState(false);
  const [close, setClose] = useState(false);
  const [fullyClose, setFullyClose] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setAnimation(true);
    }, 1000);
    setTimeout(() => {
      setClose(true);
      document.body.style.overflow = "initial";
    }, 3500);
    setTimeout(() => {
      setFullyClose(true);
    }, 4000);
  }, []);

  if (fullyClose) return;
  return (
    <React.Fragment>
      <div
        className={`absolute top-0 left-0 bg-gray-900 w-full h-full z-[499] duration-700 ${
          close ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[500] duration-700 flex items-center md:flex-row flex-col ${
          close ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="md:w-[150px] md:h-[150px] w-[120px] h-[120px] icon icon-logo" />
        <em
          className={`md:ml-5 logo duration-1000 overflow-hidden text-white md:text-4xl text-xl md:text-left text-center md:mt-10 mt-3 ${
            animation ? "md:w-[220px] w-[120px]" : "w-0"
          }`}
        >
          <h1 className="font-extrabold">SmartHome</h1>
          <p className="py-2 font-thin text-white/[0.5]">Solutions</p>
        </em>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
