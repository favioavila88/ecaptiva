import React from "react";

const Subtitle = ({ text, className } ) => {
  // return <h3 className="cp-row-7-title-column-2">{text}</h3>;
  return <h2 className={className}>{text}</h2>;
};

export default Subtitle;
