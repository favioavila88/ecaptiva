import React from "react";
import company2 from "../../../assets/organisms/company/companyRow_5/company-02-2.jpg";
import "../../Styles/pages/company/CompanyRow_5.css";
import CareerBase from "../carrers/CareerBase";

const CompanyRow_5 = () => {
  return (
    <CareerBase
      text="CAPTIVA Software LLC. is the fruit of a decade of absolute dedication by a group of highly 
            qualified IT professionals, whose passion for technology leads to exceptional achievements. 
            Over the years, we have collaborated with large, established companies, achieving exceptional 
            results together."
      title="How we work"
      image={company2}
      reverse={true}
    ></CareerBase>
  );
};

export default CompanyRow_5;
