import React from "react";
import CardHeader from "../../molecules/header/CardHeader";
import Content from "../../atoms/content";

const Card = ({ image, title, className, content, subtitle }) => {
  return (
    <div>
      <CardHeader
        image={image}
        title={title}
        className={className}
        subtitle={subtitle}
      />
      <Content text={content} />
    </div>
  );
};

export default Card;
