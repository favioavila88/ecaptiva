import React from "react";
import Title from "../../atoms/Title";
import Icon from "../../atoms/icon";
import Subtitle from "../../atoms/Subtitle";

const CardHeader = ({ image, title, className, subtitle }) => {
  const isNullOrEmpty = !subtitle ? true : false;

  return (
    <div>
      <Icon image={image}></Icon>
      <Title text={title} className={className}></Title>
      {!isNullOrEmpty ? <Subtitle text={subtitle} /> : null}
    </div>
  );
};

export default CardHeader;
