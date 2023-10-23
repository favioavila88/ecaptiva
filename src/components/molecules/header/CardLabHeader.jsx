import React from "react";
import Icon from "../../atoms/icon";

const CardLabHeader = ({ image, title }) => {
  return (
    <div>
      <h3>
        <Icon image={image} /> {title}
      </h3>
    </div>
  );
};

export default CardLabHeader;
