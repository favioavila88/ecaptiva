import React from "react";
import logofooter from "../../../assets/footer/CaptivaSBWait.png";
import "../../Styles/molecules/footer/IconColumn.css";

const IconColumn = () => {
  return (
    <div>
      <div className="icon-column">
        <div className="icon-column-contain">
          <div className="imagen-logo-footer">
            <img src={logofooter} className="logo-footer" />
          </div>
          <div className="name-logo-footer">Captiva Software</div>
        </div>
      </div>
    </div>
  );
};

export default IconColumn;
