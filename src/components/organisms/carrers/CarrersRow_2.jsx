import React from "react";
import "../../Styles/pages/carrers/CarrersRow_2.css";
import careers_01 from "../../../assets/organisms/carrers/carrersRow_2/careers-01.png";
import CareerBase from "./CareerBase";

const CarrersRow_2 = () => {
  const a = careers_01;
  return (
    <CareerBase
      text="Develop your projects from anywhere in the world. Ensure flexibility, convenience and better quality of life, in addition to reducing transport and food expenses. At Truelogic you always work with great clients."
      title="Work Remotely"
      image={careers_01}
      reverse={false}
    ></CareerBase>
  );
};

export default CarrersRow_2;
