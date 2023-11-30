import React from "react";

import "../../Styles/pages/services/ServicesRow_1.css";

const ServicesRow_1 = () => {
  return (
    <div>
      <div
        className="s-row-1"
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <div></div>
        <div>
          <div className="s-row-1-container">
            <div className="s-row-1-container-left">
              <h1>HOW WE WORK</h1>
            </div>
            <div className="s-row-1-container-right">
              <h2>
                It all starts with personal attention. After providing an
                expert-led assessment, we'll use the latest tech to boost your
                company's strengths.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRow_1;
