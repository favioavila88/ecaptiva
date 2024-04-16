import React from "react";
import "../../Styles/pages/company/CompanyRow_7.css";
import Card from "../carrers/Card";
import Frame from "../../molecules/header/Frame";
import Values from "../../../constants/Values";

const CompanyRow_7 = () => {
  const values = Values;

  return (
    <div className="work-with-us-row">
      <div></div>
      <div>
        <div className="work-with-us-container">
          <div></div>
          <div>
            <div className="rows-title">
              <Frame text="HOW TO WORK WITH US" lineClass="rows-title-line" />
            </div>
            <div className="work-with-us-content">
              {values.map((v) => {
                return (
                  <div key={v.id} className="work-with-us-colum">
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
