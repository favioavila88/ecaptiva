import "../../Styles/pages/home/HomeRow_11.css";

import bs11a1 from "../../../assets/organisms/home/homeRow_11/BS11a1.png";
import bs11a2 from "../../../assets/organisms/home/homeRow_11/BS11a2.png";
import bs11a3 from "../../../assets/organisms/home/homeRow_11/BS11a3.png";

const HomeRow_11 = () => {
  return (
    <div className="readings">
      <div className="readings-content-item">
        <figure>
          <img src={bs11a1} />
        </figure>
        <div>
          <h2 className="readings-item-title">
            Finding Tech Talent: Why is it a challenge and how to get around it
          </h2>
        </div>
        <div>
          <p className="row-11-description">
            The increase in the cost of hiring and retaining qualified
            softwareengineers is something that has not gone unnoticed,...
          </p>
        </div>
        <div className="readings-item-text">READ MORE</div>
      </div>
      <div className="readings-content-item">
        <figure>
          <img src={bs11a2} />
        </figure>
        <h2 className="readings-item-title">
          Finding Tech Talent: Why is it a challenge and how to get around it
        </h2>
        <p className="row-11-description">
          Machine learning and AI are quickly becoming essential tools for
          optimizing and automating business processes that...
        </p>
        <div className="readings-item-text">READ MORE</div>
      </div>
      <div className="readings-content-item">
        <figure>
          <img src={bs11a3} />
        </figure>
        <h2 className="readings-item-title">
          How To Optimize Your Software Development Team in 2023
        </h2>
        <div className="row-11-short-detail">
          <p className="row-11-description">
            Managing a software development team is no easy task. You have to
            keep your software engineers motivated and foster a...
          </p>
          <div className="readings-item-text">READ MORE</div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_11;
