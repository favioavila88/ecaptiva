import React from "react";
import "../Styles/organisms/loader.css";
import logoCaptivaHeader1 from "../../assets/header/captiva-loader.jpg";

const Loader = () => {
  return (
    <div className="loader-box">
      <img src={logoCaptivaHeader1} />
    </div>
  );
};

export default Loader;
