import React from "react";
import Title from "../../atoms/Title";
import Line from "../../atoms/line";

const Frame = ({ text, lineClass }) => {
  return (
    <div>
      <Title text={text}></Title>
      <Line className={lineClass}></Line>
    </div>
  );
};

export default Frame;
