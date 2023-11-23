import React from "react";
import Header from "../organisms/header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../organisms/footer/Footer";

const Templetas = () => {
  const navigation = useNavigation();

  return (
    <div className="templetes">
      <Header />

      <Outlet className="out-1" />
      <Footer />
    </div>
  );
};

export default Templetas;
