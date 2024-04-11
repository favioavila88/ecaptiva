import React, { useState } from "react";

import "../../Styles/pages/home/HomeRow_9.css";
import "../../Styles//organisms/accordion/Accordion.css";
import Accordion from "../accordion/Accordion";
import TechStacks from "../../../constants/TechStacks";
import Frame from "../../molecules/header/Frame";

const HomeRow_9 = () => {
  return (
    <>
      <div className="our-tech-stack">
        <div className="our-tech-stack-row">
          <div className="rows-title" style={{ marginTop: "30px" }}>
            <Frame text="OUR TECH STACK" lineClass="rows-title-line" />
          </div>
          <Accordion items={TechStacks} limit={10}></Accordion>
        </div>
      </div>
    </>
  );
};

export default HomeRow_9;
