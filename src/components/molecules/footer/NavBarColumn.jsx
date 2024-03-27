import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/molecules/footer/NavBarColumn.css";

const NavBarColumn = () => {
  return (
    <div>
      <div className="nav-bar-column">
        <div className="nav-bar-column-container">
          <h1 className="title-menu">SITEMAP</h1>
          <ul className="menu-footer">
            <li className="menu-item">
              <NavLink
                to="/company"
                className={({ isActive }) => {
                  return isActive ? "sitemap-a" : "navbar-link";
                }}
              >
                Company
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/services"
                className={({ isActive }) => {
                  return isActive ? "sitemap-a" : "navbar-link";
                }}
              >
                Services
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/blog"
                className={({ isActive }) => {
                  return isActive ? "sitemap-a" : "navbar-link";
                }}
              >
                Blog{" "}
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/careers"
                className={({ isActive }) => {
                  return isActive ? "sitemap-a" : "navbar-link";
                }}
              >
                Careers
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/captivaAcademy"
                className={({ isActive }) => {
                  return isActive ? "sitemap-a" : "navbar-link";
                }}
              >
                Captiva Academy
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/getanestimate"
                className={({ isActive }) => {
                  return isActive ? "sitemap-a" : "navbar-link";
                }}
              >
                Get an Estimate
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarColumn;
