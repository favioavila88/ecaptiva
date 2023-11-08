import React, { useState } from "react";
import "../../Styles/organisms/accordion/Accordion.css";

const Collapse = ({ subitems, limit, collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <div className="mb-2">
      <div className="row-9-images-container">
        {subitems.map((item) => {
          if (item.index < limit) {
            return (
              <div key={item.id}>
                <img className="row-9-img-1" src={item.src} />
              </div>
            );
          }
        })}
      </div>
      <div
        className={`collapse__content notification ${
          isCollapsed ? "collapsed" : "expanded"
        }`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          marginLeft: "50%",
          cursor: "pointer",
        }}
      >
        <div onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
