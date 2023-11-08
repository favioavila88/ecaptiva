import React, { useState } from "react";

import "../../Styles/pages/home/HomeRow_9.css";
import "../../Styles//organisms/accordion/Accordion.css";
import Accordion from "../accordion/Accordion";
import TechStacks from "../../../constants/TechStacks";

const HomeRow_9 = () => {
  return (
    <>
      <div className="row-9">
        <div className="row-9-container">
          <h3 className="row-9-title">OUR TECH STACK</h3>
          <Accordion items={TechStacks} limit={10}></Accordion>
        </div>
      </div>
    </>
  );
};

export default HomeRow_9;
