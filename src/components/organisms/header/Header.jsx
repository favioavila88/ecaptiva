import React, { useState } from "react";
import Logo from "../../molecules/header/Logo";
import Navbar from "../../molecules/header/Navbar";
import "../../Styles/organisms/header/Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 80) {
      console.log(window.scrollY);
      setNavbar(true);
    } else {
      console.log("menor");
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="header-1">
      <div>
        <div className={navbar ? "contain-header active" : "contain-header"}>
          <Logo />
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
