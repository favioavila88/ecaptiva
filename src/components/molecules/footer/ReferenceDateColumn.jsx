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
          <div>
            <ul className="social-red">
              <li className="fa fa-facebook fa-lg simple_social"></li>
              <li className="fa fa-twitter grow"></li>
              <li className="fa fa-google grow"></li>
              <li className="fa fa-github grow"></li>
              <li className="fa fa-codepen grow"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDateColumn;
