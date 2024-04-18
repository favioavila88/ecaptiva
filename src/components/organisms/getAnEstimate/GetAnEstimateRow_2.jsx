import React from "react";
import Formulary from "../../molecules/contactUS/Formulary";
import ContactUsColumn_1 from "../../molecules/contactUS/ContactUsColumn_1";
import "../../Styles/pages/getAnEstimate/GetAnEstimateRow_2.css";

const GetAnEstimateRow_2 = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
      }}
    >
      <div className="get-an-estimate-row">
        <>
          <div></div>
          <div className="get-an-estimate-row-content">
            <ContactUsColumn_1 />
            <Formulary />
          </div>
        </>
      </div>
    </div>
  );
};

export default GetAnEstimateRow_2;
