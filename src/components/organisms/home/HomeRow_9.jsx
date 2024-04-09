import React, { useState } from "react";

import "../../Styles/pages/home/HomeRow_9.css";
import "../../Styles//organisms/accordion/Accordion.css";
import Accordion from "../accordion/Accordion";
import TechStacks from "../../../constants/TechStacks";
import Frame from "../../molecules/header/Frame";

const HomeRow_9 = () => {
  return (
    <>
      <div className="row-9">
        <div className="row-9-container">
          <div className="cp-row-7-title" style={{ marginTop: "30px" }}>
            <Frame text="OUR TECH STACK" lineClass="cp-row-7-line" />
          </div>
          <Accordion items={TechStacks} limit={10}></Accordion>
        </div>
      </div>
    </>
  );
};

export default HomeRow_9;
