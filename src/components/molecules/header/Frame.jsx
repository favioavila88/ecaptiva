import React from "react";
import Subtitle from "../../atoms/Title";
import Line from "../../atoms/line";
import Title from "../../atoms/Title";

const Frame = ({ text, lineClass }) => {
  return (
    <div>
      <Title text={text}></Title>
      <Line className={lineClass}></Line>
    </div>
  );
};

export default Frame;
