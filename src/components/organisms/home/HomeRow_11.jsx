import "../../Styles/pages/home/HomeRow_11.css";

import bs11a1 from "../../../assets/organisms/home/homeRow_11/BS11a1.png";
import bs11a2 from "../../../assets/organisms/home/homeRow_11/BS11a2.png";
import bs11a3 from "../../../assets/organisms/home/homeRow_11/BS11a3.png";

const HomeRow_11 = () => {
  const setStyle = (name) => {
    var $elem = document.querySelector(`#${name}`);
    if ($elem.className.includes("short")) {
      $elem.classList.remove("short");
      $elem.classList.toggle("full");
    } else {
      $elem.classList.remove("full");
      $elem.classList.toggle("short");
    }
  };

  return (
    <div className="readings">
      <div className="readings-content-item finding-tech-talent">
        <h2 className="readings-item-title">
          Finding Tech Talent: Why is it a challenge and how to get around it
        </h2>
        <p id="finding-tech" className="row-11-description short">
          The increase in the cost of hiring and retaining qualified software
          engineers is something that has not gone unnoticed.
        </p>

        <div
          className="readings-item-text"
          onClick={() => setStyle("finding-tech")}
        >
          READ MORE
        </div>
      </div>
      <div className="readings-content-item finding-talent">
        <h2 className="readings-item-title">
          Finding Tech Talent: Why is it a challenge and how to get around it
        </h2>
        <p id="finding-talent" className="row-11-description short">
          Machine learning and AI are quickly becoming essential tools for
          optimizing and automating business processes that...
        </p>
        <div
          className="readings-item-text"
          onClick={() => setStyle("finding-talent")}
        >
          READ MORE
        </div>
      </div>
      <div className="readings-content-item optimize">
        <h2 className="readings-item-title">
          How To Optimize Your Software Development Team in 2023
        </h2>
        <div className="row-11-short-detail">
          <p id="optimize" className="row-11-description short">
            Managing a software development team is no easy task. You have to
            keep your software engineers motivated and foster a...
          </p>
          <div
            className="readings-item-text"
            onClick={() => setStyle("optimize")}
          >
            READ MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRow_11;
