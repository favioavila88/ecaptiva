import "../../Styles/pages/home/HomeRow_4.css";
import "../../Styles//organisms/accordion/Accordion.css";
import BrandsTrustUs from "../../../constants/BrandsTrustUs";
import Accordion from "../accordion/Accordion";
import Frame from "../../molecules/header/Frame";

const HomeRow_4 = () => {
  return (
    <div className="slideInUp">
      <div className="row-4">
        <div className="row-4-container">
          <>
            <div></div>
            <div>
              <div key="ServicesRow_33" className="cp-row-7-title">
                <Frame text="BRANDS THAT TRUST US" lineClass="cp-row-7-line" />
              </div>
              <div className="row-4-images-container">
                {BrandsTrustUs.map((brand) => {
                  return (
                    <div key={brand.id}>
                      <img className="row-4-img-1" src={brand.src} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_4;
