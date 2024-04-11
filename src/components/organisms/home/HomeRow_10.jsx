import { NavLink } from "react-router-dom";
import "../../Styles/pages/home/HomeRow_10.css";

const HomeRow_10 = () => {
  return (
    <>
      <div className="reach-us">
        <div></div>
        <div>
          <div className="reach-us-container">
            <p className="reach-us-paragraph">HOW DO YOU REACH US?</p>
            <h2 className="reach-us-subtitle">RIGHT HERE</h2>
            <div className="reach-us-button">
              <NavLink to="/company">Find out more</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRow_10;
