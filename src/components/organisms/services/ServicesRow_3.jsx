import React from "react";
import "../../Styles/pages/services/ServicesRow_3.css";
import Labs from "../../../constants/Labs";
import CompanyCard from "../company/CompanyCard";
import Frame from "../../molecules/header/Frame";

const ServicesRow_3 = () => {
  return (
    <div>
      <div
        key="ServicesRow_31"
        className="s-row-3"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <div></div>
        <div>
          <div key="ServicesRow_32" className="s-row-3-container">
            <div key="ServicesRow_33" className="cp-row-7-title">
              <Frame key="abc834" text="OUR LABS" lineClass="cp-row-7-line" />
            </div>
            <div className="s-row-3-content">
              {Labs.map((lab) => {
                return (
                  <div key={lab.id} className="s-row-3-item">
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
