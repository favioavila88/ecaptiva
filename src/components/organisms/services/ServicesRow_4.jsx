import React from "react";
import { NavLink } from "react-router-dom";

import "../../Styles/pages/home/HomeRow_1.css";
import "../../Styles/pages/services/ServicesRow_4.css";

const ServicesRow_4 = () => {
  return (
    <div
      className="s-row-4"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 70% 15%",
        gridTemplateRows: "100%",
        gridGap: "10px",
      }}
    >
      <div></div>
      <div>
        <div className="s-row-4-container">
          <div className="s-row-4-title">
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
