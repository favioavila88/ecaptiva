import React from "react";

import "../../Styles/pages/services/ServicesRow_2.css";
import Card from "../carrers/Card";
import Frame from "../../molecules/header/Frame";
import Services from "../../../constants/Services";

const ServicesRow_2 = () => {
  return (
    <div>
      <div className="business-models-row">
        <div></div>
        <div>
          <div className="business-models-container">
            <div className="rows-title">
              <Frame text="BUSINESS MODELS" lineClass="s-row-2-line" />
            </div>
            <div className="business-models-content">
              {Services.map((service) => {
                return (
                  <div key={service.id} className="business-models-item">
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
