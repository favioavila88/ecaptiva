import React from "react";
import Title from "../../atoms/Title";
import Icon from "../../atoms/icon";
import Subtitle from "../../atoms/Subtitle";

const CardHeader = ({ image, title, className, subtitle }) => {
  const isNullOrEmpty = !subtitle ? true : false;

  return (
    <div>
      <Title text={title} className={className}></Title>
      <Icon image={image}></Icon>      
      {!isNullOrEmpty ? <Subtitle text={subtitle} className={className}/> : null}
    </div>
  );
};

export default CardHeader;
