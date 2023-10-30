import React from "react";
import ServicesRow_1 from "../organisms/services/ServicesRow_1";
import ServicesRow_2 from "../organisms/services/ServicesRow_2";
import ServicesRow_3 from "../organisms/services/ServicesRow_3";
import ServicesRow_4 from "../organisms/services/ServicesRow_4";
import ServicesRow_6 from "../organisms/services/ServicesRow_6";
import HomeRow_9 from "../organisms/home/HomeRow_9";

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="seervices-container">
          <ServicesRow_1 />
          <ServicesRow_2 />
          <ServicesRow_3 />
          <ServicesRow_4 />
          <HomeRow_9 />
          <ServicesRow_6 />
        </div>
      </div>
    </div>
  );
};

export default Services;
