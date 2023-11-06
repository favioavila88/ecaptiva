import React, { useState } from "react";
import TechStacks from "../../../constants/TechStacks";
import "../../Styles/pages/home/HomeRow_9.css";

const HomeRow_9 = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className="row-9">
        <div className="row-9-container">
          <h3 className="row-9-title">OUR TECH STACK</h3>
          <div className="row-9-images-container">
            <div className="mb-2">
              <header onClick={() => setIsCollapsed(!isCollapsed)}>
                <div className="row-9-images-container">
                  {TechStacks.map((tech) => {
                    if (tech.index < 10) {
                      return (
                        <div key={tech.id}>
                          <img className="row-9-img-1" src={tech.src} />
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
                  <div className="row-9-images-container">
                    {TechStacks.map((tech) => {
                      if (tech.index > 9) {
                        return (
                          <div key={tech.id}>
                            <img className="row-9-img-1" src={tech.src} />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    marginLeft: "50%",
                  }}
                >
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
              </header>
            </div>
          </div>
          {/* <div className="row-9-images-container">
            {TechStacks.map((tech) => {
              return (
                <div key={tech.id}>
                  <img className="row-9-img-1" src={tech.src} />
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeRow_9;
