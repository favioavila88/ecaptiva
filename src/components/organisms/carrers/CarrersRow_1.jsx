import React from "react";
import "../../Styles/pages/carrers/CarrersRow_1.css";

const CarrersRow_1 = () => {
  return (
    <div className="ca-row-1">
      <div
        className="ca_row_1-container"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <div></div>
        <div>
          <div className="ca_row_1-content-text">
            <h2>
              <div className="ca_row_1-title">BECOME A CAPTIVA ENGINEER</div>
            </h2>
            <div className="ca_row_1_line"></div>
            <p>
              We are more than 100 Truepers all around the world, making the
              difference on people's lives. Join us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrersRow_1;
