import React from "react";
import "../../Styles/molecules/contactUs/ContactUsColumn_1.css";

const ContactUsColumn_1 = () => {
  return (
    <div>
      <div className="contact-us">
        <div
          className="contact-us-container"
          style={{
            opacity: "1",
          }}
        >
          <div className="contact-us-title">
            <h1>CONTACT US!</h1>
          </div>
          <div className="contact-us-text-white">
            <p>
              Our goal is to help businesses of all sizes and industries
              successfully innovate and grow. <br />
              <br />
              Our specialists are available for free consultations to discuss
              how we can help you achieve your project goals.{" "}
            </p>
          </div>
          <br />
          <div className="contact-us-text-white">
            <p>Hire Top Tech Talent from Latin America in a few days! </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsColumn_1;
