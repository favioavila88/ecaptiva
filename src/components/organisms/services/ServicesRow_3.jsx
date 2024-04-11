import React from "react";
import "../../Styles/pages/services/ServicesRow_3.css";
import Labs from "../../../constants/Labs";
import CompanyCard from "../company/CompanyCard";
import Frame from "../../molecules/header/Frame";

const ServicesRow_3 = () => {
  return (
    <div>
      <div id="grid-row" key="ServicesRow_31" className="s-row-3">
        <div></div>
        <div>
          <div key="ServicesRow_32" className="s-row-3-container">
            <div key="ServicesRow_33" className="rows-title">
              <Frame key="abc834" text="OUR LABS" lineClass="rows-title-line" />
            </div>
            <div className="our-labs-content">
              {Labs.map((lab) => {
                return (
                  <div key={lab.id} className="our-labs-item">
                    <CompanyCard
                      image={lab.image}
                      title={lab.title}
                      content={lab.content}
                    ></CompanyCard>
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

export default ServicesRow_3;
