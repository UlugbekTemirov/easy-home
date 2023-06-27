import React from "react";
import services from "../../../db/service.db";
import ServiceCard from "./ServiceCard";
//import image
import control1 from "../../../assets/icons/control1.png";
import control2 from "../../../assets/icons/control2.png";
import control3 from "../../../assets/icons/control3.png";

function ServicesList() {
  const images = [control1, control2, control3];

  const renderServices = (services) => {
    return services.map((service, index) => {
      if (index >= 3) return null;
      return (
        <div key={service.id} className="col-span-1">
          <ServiceCard {...service} icon={images[index]} />
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:w-3/5">
      {renderServices(services)}
    </div>
  );
}

export default ServicesList;
