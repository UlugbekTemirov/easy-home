import React, { useEffect } from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";
import services from "../../db/service.db";
import ServiceCard from "./components/ServiceCard";

//functions
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../redux/services.slice";
import Translate from "../../utils/Translate";
import ServiceSkeletLoader from "./components/ServiceSkeletLoader";

const Index = () => {
  const { services, loading, error } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());

    // eslint-disable-next-line
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  if (services?.results?.length <= 0)
    return (
      <h1>
        <Translate
          dictionary={{
            en: "No services found",
            ru: "Услуги не найдены",
            uz: "Xizmatlar topilmadi",
          }}
        />
      </h1>
    );

  return (
    <div>
      <BgCover
        title={{ uz: "Xizmatlar", ru: "Услуги", en: "Services" }}
        image="https://www.kingstowncollege.ie/wp-content/uploads/2022/03/team-development-plan.jpeg"
      />
      <Container>
        {loading ? (
          <ServiceSkeletLoader />
        ) : (
          <div className="py-10">
            <div className="flex flex-col gap-10">
              {services?.results?.map((service, index) => (
                <ServiceCard key={index} index={index} {...service} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Index;

// className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5"
