import { NavLink } from "react-router-dom";
import "../../Styles/pages/home/HomeRow_6.css";

const HomeRow_6 = () => {
  return (
    <div
      className="teams-results"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 70% 15%",
        gridTemplateRows: "100%",
        gridGap: "10px",
      }}
    >
      <div></div>
      <div>
        <div className="row-6-container">
          <h2 className="row-6-title">
            PROVEN TEAMS.
            <br />
            PROVEN RESULTS.
          </h2>
          <div className="row-6-button">
            <NavLink to="/company">Find out more</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_6;
