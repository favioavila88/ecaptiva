import { NavLink } from "react-router-dom";
import "../../Styles/pages/home/HomeRow_1.css";
import videoHome from "../../../assets/organisms/home/homeRow_1/OfficeVideo.mp4";

const HomeRow_1 = () => {
  return (
    <div className="row-1">
      <div className="row-1-container">
        <video autoPlay loop muted>
          <source src={videoHome}></source>
        </video>
        <div id="grid-row" className="row-1-overlay">
          <div></div>
          <div>
            <div className="row-1-container-content">
              <div className="content-row-1">
                <h1 className="row-1-title">
                  Brilliant minds <br /> build great products.
                </h1>
                <h2 className="row-1-subtitle">We have them.</h2>
                <span>
                  <NavLink to="/company">
                    <a className="row-1-botton">FIND OUT MORE</a>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_1;
