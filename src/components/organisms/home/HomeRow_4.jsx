import "../../Styles/pages/home/HomeRow_4.css";
import "../../Styles//organisms/accordion/Accordion.css";
import BrandsTrustUs from "../../../constants/BrandsTrustUs";
import Accordion from "../accordion/Accordion";

const HomeRow_4 = () => {
  return (
    <div className="row-4">
      <div className="row-4-container">
        <h3 className="row-4-title">BRANDS THAT TRUST US</h3>
        <Accordion items={BrandsTrustUs} limit={5}></Accordion>
      </div>
    </div>
  );
};

export default HomeRow_4;
