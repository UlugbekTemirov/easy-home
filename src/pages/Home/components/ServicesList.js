import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import NothingFound from "../../../components/NothingFound";
//import image
import control1 from "../../../assets/icons/control1.png";
import control2 from "../../../assets/icons/control2.png";
import control3 from "../../../assets/icons/control3.png";

//functions
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeServices } from "../../../redux/homeservices.slice";
import HomeServicesLoader from "./HomeServicesLoader";

function ServicesList() {
  const { homeServices, loading, error } = useSelector(
    (state) => state.homeServices
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (homeServices?.results?.length) return;
    dispatch(fetchHomeServices());

    // eslint-disable-next-line
  }, []);

  const images = [control1, control2, control3];

  const renderServices = (services) => {
    if (!services) return;
    return services.map((service, index) => {
      if (index >= 3) return null;
      return (
        <div key={service.id} className="col-span-1">
          <ServiceCard {...service} icon={images[index]} />
        </div>
      );
    });
  };

  if (error) return <div>Error...</div>;
  if (homeServices.results && homeServices.results.length === 0)
    return <NothingFound />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:w-3/5">
      {loading ? <HomeServicesLoader /> : renderServices(homeServices.results)}
    </div>
  );
}

export default ServicesList;
