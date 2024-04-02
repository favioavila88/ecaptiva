import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/molecules/header/Navbar.css";
import MenuList from "../../../constants/MenuList";

function openMenu() {
  const dropDownMenu = document.querySelector(".dropdown_menu");
  if (dropDownMenu) dropDownMenu.classList.toggle("open");
}

const Navbar = () => {
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
        <a href="#" className="action_btn">
          ...
        </a>
        <div className="toggle-btn" onClick={openMenu()}>
          <i className="fa-solid fa-bars"></i>
        </div>

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
      </nav>
    </div>
  );
};

export default Navbar;
