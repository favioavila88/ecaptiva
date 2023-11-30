import React from "react";

import "../../Styles/pages/services/ServicesRow_2.css";
import Card from "../carrers/Card";
import Frame from "../../molecules/header/Frame";
import Services from "../../../constants/Services";

const ServicesRow_2 = () => {
  return (
    <div>
      <div
        className="s-row-2"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <div></div>
        <div>
          <div className="s-row-2-container">
            <div className="cp-row-7-title">
              <Frame text="BUSINESS MODELS" lineClass="s-row-2-line" />
            </div>
            <div className="s-row-2-content">
              {Services.map((service) => {
                return (
                  <div key={service.id} className="s-row-2-item">
                    <Card
                      image={service.image}
                      title={service.title}
                      subtitle={service.subtitle}
                      content={service.content}
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

export default ServicesRow_2;
