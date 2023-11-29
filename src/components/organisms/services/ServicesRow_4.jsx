import React from "react";

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
          <div className="s-row-4-button">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRow_4;
