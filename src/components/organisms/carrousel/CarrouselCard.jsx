import React, { useState } from "react";
import "../../Styles/pages/home/HomeRow_5.css";
import "../../Styles/organisms/carrousel/Carrousel.css";

const CarrouselCard = ({ list }) => {
  const [cindex, setIndex] = useState(0);

  const next = () => {
    if (cindex < list.length - 1) {
      setIndex(cindex + 1);
    } else {
      setIndex(0);
    }
  };

  const back = () => {
    if (cindex > 0) {
      setIndex(cindex - 1);
    } else {
      setIndex(list.length - 1);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div onClick={() => back()}>
          <svg
            style={{ opacity: "0.5" }}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <div
          className="row-5-container"
          style={{ position: "relative", height: "200px", padding: "15px" }}
        >
          <div className="slide">
            <div className="st">
              <div className="row-5-paragraph">
                <h3 className="row-5-text-paragraph"> {list[cindex].text}</h3>
                <p>
                  {list[cindex].whom}
                  <span className="row-5-link">{list[cindex].link}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => next()}>
          <svg
            style={{ opacity: "0.5" }}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
        </div>
      </div>
      <div className="c-container">
        {list.map((item, index) => {
          return (
            <div
              key={item.id}
              className={cindex == index ? "c-items-dis" : "c-items"}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default CarrouselCard;
