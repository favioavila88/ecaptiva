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
    console.log("openMenu");
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
    if (dropDownMenu && window.location.pathname != pathName) {
      dropDownMenu.classList.remove("open");
      setDisplayCross1(false);
    }
  });

  useEffect(() => {
    const handleClick = (event) => {
      console.log("opened:", event.target.id);
      if (event.target.id == "") {
        const dropDownMenu = document.querySelector(".dropdown_menu");
        if (dropDownMenu && dropDownMenu.classList[1] == "open") {
          dropDownMenu.classList.remove("open");
          setDisplayCross1(false);
        }
      }
    };
    window.addEventListener("click", handleClick);
  });

  // window.addEventListener("click", function (e) {
  //   if (document.getElementById("dp_navbar").contains(e.target)) {
  //     console.log("e.target: " + e.target);
  //   } else {
  //     console.log("e.target else: " + e.target);
  //     const dropDownMenu = document.querySelector(".dropdown_menu");
  //     console.log(displayCross1);
  //     if (dropDownMenu && !displayCross1) {
  //       dropDownMenu.classList.remove("open");
  //       //   setDisplayCross1(false);
  //     }
  //   }
  // });

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
          <div id="collapse_menu">
            <button
              id="btn_menu"
              type="submit"
              className="toggle-btn"
              onClick={() => openMenu()}
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginTop: "0px",
                paddingLeft: "18px",
                fontSize: "25px",
                zIndex: "1000",
              }}
            >
              {displayCross1 ? (
                <div id="rx_cross_1">
                  <RxCross1 id="cross" style={{ zIndex: "-5000" }} />
                </div>
              ) : (
                <div id="hamburger">
                  <RxHamburgerMenu id="hamb" />
                </div>
              )}
            </button>

            <div id="dd_menu_captiva" className="dropdown_menu">
              {MenuList.map((item) => {
                return (
                  <li id={item.id} key={item.id}>
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
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
