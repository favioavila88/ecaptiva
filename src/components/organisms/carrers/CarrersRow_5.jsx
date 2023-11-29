import React from "react";
import "../../Styles/pages/carrers/CarrersRow_5.css";

const CarrersRow_5 = () => {
  return (
    <div
      className="ca-row-5"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 70% 15%",
        gridTemplateRows: "100%",
        gridGap: "10px",
      }}
    >
      <div></div>
      <div>
        <div className="ca-row-5-container">
          <div className="ca-row-5-content">
            <div className="ca-row-5-content-text">
              <h3 className="ca-row-5-tile">
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
            <div className="ca-row-5-button">APPLY HERE!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrersRow_5;
