import React from "react";
import "../../Styles/pages/company/CompanyRow_4.css";
import company from "../../../assets/organisms/company/companyRow_4/company-01.png";
import CareerBase from "../carrers/CareerBase";

const CompanyRow_4 = () => {
  return (
    <CareerBase
      text="Who's behind Truelogic? The world's leading tech professionals. But for us going to work doesn't mean disappearing into separate cubicles. We may show up in jeans, but we work as a team - a team that comes up with tangible solutions for you, our client."
      title="Truelogic's true story"
      image={company}
      reverse={false}
      subtitle="WHO WE ARE"
    ></CareerBase>
  );
};

export default CompanyRow_4;
