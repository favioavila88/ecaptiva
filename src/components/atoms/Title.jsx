import React from "react";

const Title = ({ text, className }) => {
  return (
    <h3 id="h3-min-height" className={className}>
      {text}
    </h3>
  );
};

export default Title;
