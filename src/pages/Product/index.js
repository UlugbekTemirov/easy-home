import React from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Product {slug}</h1>
    </div>
  );
};

export default Index;
