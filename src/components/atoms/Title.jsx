import React from "react";

const Title = ({ text, className }) => {
  return (
    <h3 style={{ minHeight: "50px" }} className={className}>
      {text}
    </h3>
  );
};

export default Title;
