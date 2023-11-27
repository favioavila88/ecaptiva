import React from "react";
import "../../Styles/pages/company/CompanyRow_4.css";
import company from "../../../assets/organisms/company/companyRow_4/company-02.jpg";
import CareerBase from "../carrers/CareerBase";

const CompanyRow_4 = () => {
  return (
    <CareerBase
      text="CAPTIVA Software LLC. is a company located in Cochabamba that specializes in improving 
            the engineering skills of any firm worldwide. We increase the intellectual production 
            of our clients by providing the most outstanding human resources through a Nearshore 
            model. Based in the Valley of Cochabamba - Bolivia."
      title="CAPTIVA true story"
      image={company}
      reverse={false}
      subtitle="WHO WE ARE"
    ></CareerBase>
  );
};

export default CompanyRow_4;
