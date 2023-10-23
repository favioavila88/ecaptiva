import React from "react";
import company2 from "../../../assets/organisms/company/companyRow_5/company-02-1.png";
import "../../Styles/pages/company/CompanyRow_5.css";
import CareerBase from "../carrers/CareerBase";

const CompanyRow_5 = () => {
  return (
    <CareerBase
      text="At Captiva, we're a collective of like-minded techies who love taking on projects together that go beyond the workspace. We believe that true innovation is born out of true collaboration which is how we find new and innovative solutions for our clients."
      title="How we work"
      image={company2}
      reverse={true}
    ></CareerBase>
  );
};

export default CompanyRow_5;
