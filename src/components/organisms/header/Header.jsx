import React, { useState, useEffect } from "react";
import Logo from "../../molecules/header/Logo";
import Navbar from "../../molecules/header/Navbar";
import "../../Styles/organisms/header/Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 430) {
      setIsResponsive(true);
      setNavbar(true);
    }
  });

  const changeBackground = () => {
    if (window.scrollY > 80 || isResponsive == true) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeHeader = () => {
    if (window.innerWidth <= 430) {
      setIsResponsive(true);
      setNavbar(true);
    } else {
      setIsResponsive(false);
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  window.addEventListener("resize", changeHeader);

  return (
    <div className="header-1">
      <div
        className={
          navbar || window.innerWidth <= 430
            ? "contain-header active"
            : "contain-header"
        }
      >
        <div>
          <div id="my-header">
            <div></div>
            {isResponsive || window.innerWidth <= 430 ? (
              <div className="content-header">
                <Navbar />
                <Logo />
              </div>
            ) : (
              <div className="content-header">
                <Logo />
                <Navbar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
