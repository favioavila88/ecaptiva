import "../../Styles/pages/home/HomeRow_4.css";
import BrandsTrustUs from "../../../constants/BrandsTrustUs";

const HomeRow_4 = () => {
  return (
    <div className="slideInUp">
      <div className="row-4">
        <div
          className="row-4-container"
          style={{
            display: "grid",
            gridTemplateColumns: "15% 70% 15%",
            gridTemplateRows: "100%",
            gridGap: "10px",
          }}
        >
          <>
            <div></div>
            <div>
              <div className="row-4-title-text">
                <h3 className="row-4-title">BRANDS THAT TRUST US</h3>
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
