import React from "react";
import cochabamba from "../../../assets/organisms/contactUs/contactUsRow_3/IconAzul12.png";
import mataGozo from "../../../assets/organisms/contactUs/contactUsRow_3/IconAzul11.png";
import "../../Styles/pages/contactUS/ContactUsRow_3.css";

const ContactUsRow_3 = () => {
  return (
    <div>
      <div className="our-locations">
        <div></div>
        <div>
          <div className="our-locations-container">
            <div className="our-locations-title">OUR LOCATIONS</div>
            <div className="s-row-2-line"></div>
            <div className="our-locations-column">
              <div className="our-locations-column-container">
                <img src={cochabamba} alt="cochabamba" />
                <div className="our-locations-column-title">COCHABAMBA</div>
              </div>
              <div className="our-locations-column-container">
                <img src={mataGozo} alt="mataGozo" />
                <div className="our-locations-column-title">MALTA GOZO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsRow_3;
