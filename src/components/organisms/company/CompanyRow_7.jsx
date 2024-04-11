import React from "react";
import "../../Styles/pages/company/CompanyRow_7.css";
import Card from "../carrers/Card";
import Frame from "../../molecules/header/Frame";
import Values from "../../../constants/Values";

const CompanyRow_7 = () => {
  const values = Values;

  return (
    <div
      className="cp-row-7"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 70% 15%",
        gridTemplateRows: "100%",
        gridGap: "10px",
      }}
    >
      <div></div>
      <div>
        <div className="cp-row-7-container">
          <div></div>
          <div>
            <div className="rows-title">
              <Frame text="HOW TO WORK WITH US" lineClass="rows-title-line" />
            </div>
            <div className="cp-row-7-content">
              {values.map((v) => {
                return (
                  <div key={v.id} className="cp-row-7-colum">
                    <Card
                      image={v.image}
                      title={v.title}
                      subtitle={v.subtitle}
                      className={v.className}
                      content={v.content}
                    ></Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRow_7;
