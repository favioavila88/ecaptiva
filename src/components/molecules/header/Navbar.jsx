import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxDropdownMenu, RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import "../../Styles/molecules/header/Navbar.css";
import MenuList from "../../../constants/MenuList";

const Navbar = () => {
  const [displayHamburger, setDisplayHamburger] = useState(false);
  const [displayCross1, setDisplayCross1] = useState(false);
  const [pathName, setPathName] = useState("/");

  const openMenu = () => {
    const dropDownMenu = document.querySelector(".dropdown_menu");
    if (dropDownMenu && dropDownMenu.classList[1] == undefined) {
      dropDownMenu.classList.toggle("open");
      setDisplayCross1(true);
      setPathName(window.location.pathname);
    } else if (dropDownMenu && dropDownMenu.classList[1] == "open") {
      dropDownMenu.classList.remove("open");
      setDisplayCross1(false);
      setPathName(window.location.pathname);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 430) {
      setDisplayHamburger(true);
    }

    const dropDownMenu = document.querySelector(".dropdown_menu");
    if (window.location.pathname != pathName) {
      dropDownMenu.classList.remove("open");
      setDisplayCross1(false);
    }
  });

  return (
    <div>
      <nav>
        <ul className="text-navbar">
          {MenuList.map((item) => {
            return (
              <li className="" key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => {
                    return isActive
                      ? "testing-style-a"
                      : item.path == "./getAnEstimate"
                      ? "border-solid-gs"
                      : "navbar-link";
                  }}
                >
                  {item.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {displayHamburger ? (
          <>
            <button
              type="submit"
              className="toggle-btn"
              onClick={() => openMenu()}
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginTop: "0px",
              }}
            >
              {displayCross1 ? (
                <>
                  <RxCross1 />
                </>
              ) : (
                <>
                  <RxHamburgerMenu />
                </>
              )}
            </button>

            <div className="dropdown_menu">
              {MenuList.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => {
                        return isActive
                          ? "testing-style-a"
                          : item.path == "./getAnEstimate"
                          ? "border-solid-gs"
                          : "navbar-link";
                      }}
                    >
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
