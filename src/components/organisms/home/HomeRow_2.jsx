import React, { useState } from "react";
import "../../Styles/pages/home/HomeRow_2.css";
import "../../Styles/pages/home/HomeRow_2.css";
import { useSpring, animated } from "react-spring";

const HomeRow_2 = () => {
  const [number, setNumber] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 600) {
      setNumber(true);
    } else {
      setNumber(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  function Number({ n, s }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 500,
      config: { mass: 1, tension: 50, friction: 10 },
    });

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <animated.div style={{ width: "fit-content" }}>
          {number.to((n) => n.toFixed(0))}
        </animated.div>
        <span style={{ float: "right" }}>{s}</span>
      </div>
    );
  }
  return (
    <div className="row-2">
      <div className="row-2-container">
        <div className="row-2-text-container">
          <div className="row-2-item">
            <h2> {number ? <Number n={5}></Number> : "0"}</h2>
            <h4>YEARS IN BUSINESS</h4>
          </div>
          <div className="row-2-item">
            <h2>{number ? <Number n={20} s="+"></Number> : "0+"}</h2>
            <h4>COMPLETED PROJECTS</h4>
          </div>
          <div className="row-2-item">
            <h2>{number ? <Number n={4} s="+"></Number> : "0+"}</h2>
            <h4>YEARS WITH ISO 9001 CERTIFIED PROCESSES</h4>
          </div>
          <div className="row-2-item">
            <h2>{number ? <Number n={100} s="%"></Number> : "0%"}</h2>
            <h4>U.S. CLIENTS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_2;
