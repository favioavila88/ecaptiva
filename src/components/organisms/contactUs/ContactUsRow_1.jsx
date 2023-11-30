import React from "react";
import "../../Styles/pages/contactUS/ContactUsRow_1.css";

const ContactUsRow_1 = () => {
  return (
    <div>
      <div
        className="contactUs-row-1"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <div></div>
        <div>
          {" "}
          <div className="contactUs-row-1-container">
            <div className="contactUs-row-1-container-left">
              <h1>HIRE NEARSHORE TECH TALENTS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsRow_1;
