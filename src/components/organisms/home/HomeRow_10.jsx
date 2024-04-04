import { NavLink } from "react-router-dom";
import "../../Styles/pages/home/HomeRow_10.css";

const HomeRow_10 = () => {
  return (
    <>
      <div className="row-10">
        <div></div>
        <div>
          <div className="row-10-container">
            <p className="row-10-paragraph">HOW DO YOU REACH US?</p>
            <h2 className="row-10-subtitle">RIGHT HERE</h2>
            <div className="row-10-button">
              <NavLink to="/company">Find out more</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRow_10;
