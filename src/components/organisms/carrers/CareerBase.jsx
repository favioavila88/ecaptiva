import React from "react";
import "../../Styles/pages/carrers/CarrersRow_3.css";
import "../../Styles/pages/carrers/CarrersRow_2.css";
import "../../Styles/pages/company/CompanyRow_4.css";

const CareerBase = ({ title, text, image, reverse, subtitle, imageClass }) => {
  const isNullOrEmpty = !subtitle ? true : false;

  return (
    <div className="true-story">
      <div
        className={
          imageClass == "before"
            ? "true-story-container"
            : "true-story-container before-test"
        }
      >
        <div></div>
        <div
          className={
            !reverse ? "true-story-right-content" : "true-story-left-content"
          }
        >
          <div className={"true-story-left-content-text"}>
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
          <div className="true-story-img">
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
