import "../../Styles/pages/home/HomeRow_4.css";
import "../../Styles//organisms/accordion/Accordion.css";
import BrandsTrustUs from "../../../constants/BrandsTrustUs";
import Accordion from "../accordion/Accordion";
import Frame from "../../molecules/header/Frame";

const HomeRow_4 = () => {
  return (
    <div className="slideInUp">
      <div className="brands-trust-us">
        <div className="brands-trust-us-container">
          <>
            <div></div>
            <div>
              <div key="ServicesRow_33" className="rows-title">
                <Frame
                  text="BRANDS THAT TRUST US"
                  lineClass="rows-title-line"
                />
              </div>
              <div className="brands-trust-us-items-container">
                {BrandsTrustUs.map((brand) => {
                  return (
                    <div key={brand.id}>
                      <img className="brands-trust-us-item" src={brand.src} />
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
