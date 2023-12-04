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
      <div
        className="get-an-estimate-row"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <>
          <div></div>
          <div
            style={{
              display: "inline-flex",
              border: "2px solid #1d63f5",
              borderRadius: "15px",
              padding: "15px 0px",
              margin: "40px 0",
            }}
          >
            <ContactUsColumn_1 />
            <Formulary />
          </div>
        </>
      </div>
    </div>
  );
};

export default GetAnEstimateRow_2;
