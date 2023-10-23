import React from "react";
import Content from "../../atoms/content";
import CardLabHeader from "../../molecules/header/CardLabHeader";

const CompanyCard = ({ image, title, className, content }) => {
  return (
    <div>
      <CardLabHeader image={image} title={title} className={className} />
      <Content text={content} />
    </div>
  );
};

export default CompanyCard;
