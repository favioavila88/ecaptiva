import React from "react";
import IconColumn from "../../molecules/footer/IconColumn";
import LogosWorkColumn from "../../molecules/footer/LogosWorkColumn";
import NavBarColumn from "../../molecules/footer/NavBarColumn";
import ReferenceDateColumn from "../../molecules/footer/ReferenceDateColumn";
import "../../Styles/organisms/footer/Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 70% 15%",
        gridTemplateRows: "100%",
        gridGap: "10px",
      }}
    >
      <div></div>
      <div>
        <div className="container-footer">
          <IconColumn />
          <NavBarColumn />
          <LogosWorkColumn />
          <ReferenceDateColumn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
