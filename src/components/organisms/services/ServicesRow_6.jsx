import React from "react";

import "../../Styles/pages/services/ServicesRow_6.css";
import model_01 from "../../../assets/organisms/services/servicesRow_6/unique-model-01.png";
import CareerBase from "../carrers/CareerBase";

const ServicesRow_6 = () => {
  return (
    <CareerBase
      text="Collaborative growth and functionality are leading the way in technological development, with agile methodology as a key player. The iterative development approach will give your company the edge in innovation - let us guide you through it."
      title="Agile: Collaborative development"
      image={model_01}
      reverse={true}
    ></CareerBase>
  );
};

export default ServicesRow_6;
