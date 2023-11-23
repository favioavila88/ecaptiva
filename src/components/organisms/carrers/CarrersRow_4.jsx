import React from "react";
import "../../Styles/pages/carrers/CarrersRow_4.css";
import careers_03 from "../../../assets/organisms/carrers/carrersRow_4/careers-03.png";
import CareerBase from "./CareerBase";

const CarrersRow_4 = () => {
  return (
    <CareerBase
      text="Freedom is one of the highlights of working at Truelogic. Here you have an advantageous benefits package, receive your payment in dollars, have PTO - Paid Time Off and can manage your day to day the way you want."
      title="Work from anywhere"
      image={careers_03}
      reverse={false}
    ></CareerBase>
  );
};

export default CarrersRow_4;
