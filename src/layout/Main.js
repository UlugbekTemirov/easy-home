import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-[80px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
