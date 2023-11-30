import React from "react";
import cochabamba from "../../../assets/organisms/contactUs/contactUsRow_3/IconAzul12.png";
import mataGozo from "../../../assets/organisms/contactUs/contactUsRow_3/IconAzul11.png";
import "../../Styles/pages/contactUS/ContactUsRow_3.css";

const ContactUsRow_3 = () => {
  return (
    <div>
      <div
        className="contactUsRow3"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <div></div>
        <div>
          <div className="contactUsRow3-container">
            <div className="contacUsRow3-title">OUR LOCATIONS</div>
            <div className="contacUsRow3-column">
              <div className="contacUsRow3-column-container">
                <img src={cochabamba} alt="cochabamba" />
                <div className="contacUsRow3-column-title">COCHABAMBA</div>
              </div>
              <div className="contacUsRow3-column-container">
                <img src={mataGozo} alt="mataGozo" />
                <div className="contacUsRow3-column-title">MALTA GOZO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsRow_3;
