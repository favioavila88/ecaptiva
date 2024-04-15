import React from "react";
import "../../Styles/molecules/footer/ReferenceDateColumn.css";

const ReferenceDateColumn = () => {
  return (
    <div>
      <div className="reference-column">
        <div className="reference-column-container">
          <div className="info-text">
            <h3 className="type-contact-text">
              Let's build something great together
            </h3>
          </div>
          <div className="info-text">
            <a className="number-tel-text">+591 70707070</a>
          </div>
          <div className="info-text">
            <h2 className="email-text">captiva.software@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDateColumn;
