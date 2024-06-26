import React from "react";
import ícones5 from "../../../assets/organisms/carrers/carrersRow_6/IconAzul1.png";
import ícones4 from "../../../assets/organisms/carrers/carrersRow_6/IconAzul5.png";
import ícones3 from "../../../assets/organisms/carrers/carrersRow_6/IconAzul4.png";
import ícones2 from "../../../assets/organisms/carrers/carrersRow_6/IconAzul2.png";
import ícones1 from "../../../assets/organisms/carrers/carrersRow_6/IconAzul3.png";
import "../../Styles/pages/carrers/CarrersRow_6.css";

const CarrersRow_6 = () => {
  return (
    <div className="apply-row">
      <div></div>
      <div>
        <div className="apply-row-container">
          <div className="apply-row-title">APPLY NOW IF YOU</div>
          <div className="apply-row-line"></div>
          <div className="apply-row-content">
            <div className="apply-row-item">
              <img src={ícones5} alt="ícones5" />
              <p>Want to be Agile with high-profile clients</p>
            </div>
            <div className="apply-row-item">
              <img src={ícones4} alt="ícones4" />
              <p>
                You want to use cutting edge technology to develop your projects
              </p>
            </div>
            <div className="apply-row-item">
              <img src={ícones3} alt="ícones3" />
              <p>
                Are looking for a supportive work environment that values
                teamwork
              </p>
            </div>
            <div className="apply-row-item">
              <img src={ícones2} alt="ícones2" />
              <p>
                Are eager to collaborate on challenging, multi-industry projects
              </p>
            </div>
            <div className="apply-row-item">
              <img src={ícones1} alt="ícones1" />
              <p>
                Are in a constant learning process and love to share your
                findings with co-workers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrersRow_6;
