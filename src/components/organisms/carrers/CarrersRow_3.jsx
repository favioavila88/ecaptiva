import React from "react";
import "../../Styles/pages/carrers/CarrersRow_3.css";
import careers_02 from "../../../assets/organisms/carrers/carrersRow_3/careers-02.png";
import CareerBase from "./CareerBase";

const CarrersRow_3 = () => {
  return (
    <CareerBase
      text="Even remotely, we are a great team. We develop applications, exchange knowledge and, in this way, we are able to evolve together."
      title="Be part of a community"
      image={careers_02}
      reverse={true}
    ></CareerBase>
  );
};

export default CarrersRow_3;
