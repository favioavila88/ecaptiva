import React, { useState } from "react";
import Logo from "../../molecules/header/Logo";
import Navbar from "../../molecules/header/Navbar";
import "../../Styles/organisms/header/Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="header-1">
      <div className={navbar ? "contain-header active" : "contain-header"}>
        <div>
          <div id="my-header">
            <div></div>
            <div className="content-header">
              <Logo />
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
