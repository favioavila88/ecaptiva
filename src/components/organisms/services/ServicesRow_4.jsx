import React from "react";
import { NavLink } from "react-router-dom";

import "../../Styles/pages/home/HomeRow_1.css";
import "../../Styles/pages/services/ServicesRow_4.css";

const ServicesRow_4 = () => {
  return (
    <div className="we-want-row">
      <div></div>
      <div>
        <div className="we-want-container">
          <div className="we-want-title">
            <h2>WE WANT TO HEAR FROM YOU</h2>
          </div>
          <span>
            <NavLink to="/getAnEstimate">
              <a className="row-1-botton">Contact Us</a>
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesRow_4;
