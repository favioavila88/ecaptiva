import React from "react";

import "../../Styles/pages/company/CompanyRow_2.css";

import qaLeft from "../../../assets/organisms//home/homeRow_5/quotation-left-1.png";
import qaRight from "../../../assets/organisms//home/homeRow_5/quotation-right-1.png";

const CompanyRow_2 = () => {
  return (
    <div
      className="cp-row-2"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 70% 15%",
        gridTemplateRows: "100%",
        gridGap: "10px",
      }}
    >
      <>
        <div></div>

        <div
          className="cp-row-2-container"
          style={{
            display: "grid",
            gridTemplateColumns: "10% 80% 10%",
            gridTemplateRows: "100%",
            gridGap: "10px",
          }}
        >
          <>
            <div>
              <img src={qaLeft} alt="qaLeft" className="qaLeft" />
            </div>
            <div>
              <div className="cp-row-2-content-left">
                <h3>
                  Through high-end processes and engineers, we provide the
                  service and transparency our clients need.
                </h3>
              </div>
              <h4 className="name-ceo">Christian Alvaro Avila Perez –</h4>
              <h4 className="post"> CEO</h4>
            </div>
            <div>
              <img src={qaRight} alt="qaRight" className="qaRight" />
            </div>
          </>
        </div>
      </>
    </div>
  );
};

export default CompanyRow_2;
