import "../../Styles/pages/home/HomeRow_7.css";

import img1 from "../../../assets/organisms/home/homeRow_7/27-crackle-500x360.png";
import img2 from "../../../assets/organisms/home/homeRow_7/26-oasis-collections-3-500x360.png";
import img3 from "../../../assets/organisms/home/homeRow_7/25-trinity-2-500x360.png";
import img4 from "../../../assets/organisms/home/homeRow_7/24-mym-4-500x360.png";

const HomeRow_7 = () => {
  return (
    <div className="row-7">
      <div></div>
      <div>
        <div className="row-7-title">A FEW EXAMPLES</div>
        <div className="row-7-container-column">
          <div className="row-7-column">
            <div className="row-7-content-text">
              <div className="row-7-title-text">Crackle</div>
              <div className="row-7-subtitle-text">Web App</div>
            </div>
            <figure>
              <img src={img1} className="img-1-item" />
            </figure>
          </div>
          <div className="row-7-column">
            <div className="row-7-content-text">
              <div className="row-7-title-text">Oasis Collections</div>
              <div className="row-7-subtitle-text">Ecommerce / Web Site</div>
            </div>
            <figure>
              <img src={img2} className="img-2-item" />
            </figure>
          </div>
          <div className="row-7-column">
            <div className="row-7-content-text">
              <div className="row-7-title-text">Trinity Wall Street Church</div>
              <div className="row-7-subtitle-text">Web Site</div>
            </div>
            <figure>
              <img src={img3} className="img-3-item" />
            </figure>
          </div>
          <div className="row-7-column">
            <div className="row-7-content-text">
              <div className="row-7-title-text">M&M</div>
              <div className="row-7-subtitle-text">Banners Campaign</div>
            </div>
            <figure>
              <img src={img4} className="img-4-item" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_7;
