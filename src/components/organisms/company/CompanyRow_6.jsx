import React from "react";
import contactUs from "../../../assets/organisms/company/companyRow_6/contactUs.png";
import "../../Styles/pages/company/CompanyRow_6.css";

const CompanyRow_6 = () => {
  return (
    <div
      className="cp-row-6"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 70% 15%",
        gridTemplateRows: "100%",
        gridGap: "10px",
      }}
    >
      <div></div>
      <div>
        <div className="cp-row-6-container">
          <div className="cp-row-6-block">
            <div className="cp-row-6-text-content">
              <h3>Our talent, everywhere</h3>
              <p>
                Our US and Latin American-based teams overlap 6 to 8 working
                hours, and are ready to start rocking your projects.
              </p>
              <div className="cp-row-6-img-content">
                <img src={contactUs} alt="contactUs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRow_6;
