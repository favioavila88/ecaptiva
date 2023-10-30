import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/molecules/header/Navbar.css";
import MenuList from "../../../constants/MenuList";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="content-navbar">
        <ul className="text-navbar">
          {MenuList.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.path} className={item.style}>
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
