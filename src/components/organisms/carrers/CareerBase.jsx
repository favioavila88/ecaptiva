import React from "react";
import "../../Styles/pages/carrers/CarrersRow_3.css";
import "../../Styles/pages/carrers/CarrersRow_2.css";
import "../../Styles/pages/company/CompanyRow_4.css";

const CareerBase = ({ title, text, image, reverse, subtitle, imageClass }) => {
  const isNullOrEmpty = !subtitle ? true : false;

  return (
    <div className="ca-row-2">
      <div
        className={
          imageClass == "before"
            ? "ca-row-2-container"
            : "ca-row-2-container before-test"
        }
        style={{
          display: "grid",
          gridTemplateColumns: "15% 70% 15%",
          gridTemplateRows: "100%",
          gridGap: "10px",
        }}
      >
        <div></div>
        <div className={!reverse ? "ca-row-3-content" : "ca-row-2-content"}>
          <div className={"ca-row-2-content-text"}>
            <h2>{title}</h2>
            {!isNullOrEmpty ? <h3>{subtitle}</h3> : <></>}
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                maxWidth: "520",
                lineHeight: "30px",
                paddingTop: "15px",
              }}
            >
              {text}
            </p>
          </div>
          <div className="ca-row-2-img">
            <img
              src={image}
              alt="careers_01"
              className="cp-row-4-img-content img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerBase;
