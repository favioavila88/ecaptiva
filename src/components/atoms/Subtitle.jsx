import React from "react";

const Subtitle = ({ text, className }) => {
  return (
    <h2 style={{ minHeight: "28px" }} className={className}>
      {text}
    </h2>
  );
};

export default Subtitle;
