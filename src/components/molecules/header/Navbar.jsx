import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/molecules/header/Navbar.css";
import MenuList from "../../../constants/MenuList";

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
                      ? "border-solid"
                      : "navbar-link";
                  }}
                >
                  {item.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
