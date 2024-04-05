import React from "react";
import IconColumn from "../../molecules/footer/IconColumn";
import NavBarColumn from "../../molecules/footer/NavBarColumn";
import ReferenceDateColumn from "../../molecules/footer/ReferenceDateColumn";
import "../../Styles/organisms/footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div></div>
      <div>
        <div className="container-footer">
          <IconColumn />
          <NavBarColumn />
          <ReferenceDateColumn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
