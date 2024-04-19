import React from "react";
import contactUs from "../../../assets/organisms/company/companyRow_6/contactUs.png";
import "../../Styles/pages/company/CompanyRow_6.css";

const CompanyRow_6 = () => {
  return (
    <div className="our-talent">
      <div></div>
      <div>
        <div className="our-talent-container">
          <div className="our-talent-block">
            <div className="our-talent-text-content">
              <h3>Our talent, everywhere</h3>
              <p>
                Our US and Latin American-based teams overlap 6 to 8 working
                hours, and are ready to start rocking your projects.
              </p>
              <div className="our-talent-img-content">
                <a href="/getAnEstimate">
                  <img src={contactUs} alt="contactUs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRow_6;
