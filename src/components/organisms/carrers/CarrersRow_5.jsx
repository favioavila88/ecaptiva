import { NavLink } from "react-router-dom";
import React from "react";
import "../../Styles/pages/carrers/CarrersRow_5.css";

const CarrersRow_5 = () => {
  return (
    <div className="join-team-row">
      <div></div>
      <div>
        <div className="join-team-container">
          <div className="join-team-content">
            <div className="join-team-text">
              <h3 className="join-team-title">
                JOIN OUR TEAM, BECOME A TRUEPER!
              </h3>
              <div className="ca-row-5-line"></div>
              <p>
                Truelogic offers a huge variety of job openings for software
                developers around the world. Join us to face these challenges,
                using different types of technologies and working with renowned
                customers. Come build a beautiful journey with us.
              </p>
            </div>

            <NavLink className={"join-team-button"} to="/getAnEstimate">
              APPLY HERE!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrersRow_5;
