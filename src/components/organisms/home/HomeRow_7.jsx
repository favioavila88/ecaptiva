import "../../Styles/pages/home/HomeRow_7.css";

import img1 from "../../../assets/organisms/home/homeRow_7/27-crackle-500x360.png";
import img2 from "../../../assets/organisms/home/homeRow_7/26-oasis-collections-3-500x360.png";
import img3 from "../../../assets/organisms/home/homeRow_7/25-trinity-2-500x360.png";
import img4 from "../../../assets/organisms/home/homeRow_7/24-mym-4-500x360.png";

const HomeRow_7 = () => {
  return (
    <div className="few-examples">
      <div></div>
      <div>
        <div className="few-examples-title">A FEW EXAMPLES</div>
        <div className="few-examples-container">
          <div className="few-example-item">
            <div className="few-example-text">
              <div className="few-example-item-title">Crackle</div>
              <div className="few-example-item-subtitle">Web App</div>
            </div>
            <figure>
              <img src={img1} className="img-1-item" />
            </figure>
          </div>
          <div className="few-example-item">
            <div className="few-example-text">
              <div className="few-example-item-title">Oasis Collections</div>
              <div className="few-example-item-subtitle">
                Ecommerce / Web Site
              </div>
            </div>
            <figure>
              <img src={img2} className="img-2-item" />
            </figure>
          </div>
          <div className="few-example-item">
            <div className="few-example-text">
              <div className="few-example-item-title">
                Trinity Wall Street Church
              </div>
              <div className="few-example-item-subtitle">Web Site</div>
            </div>
            <figure>
              <img src={img3} className="img-3-item" />
            </figure>
          </div>
          <div className="few-example-item">
            <div className="few-example-text">
              <div className="few-example-item-title">M&M</div>
              <div className="few-example-item-subtitle">Banners Campaign</div>
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
