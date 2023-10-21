import React from "react";
import nut_dev from "../../../assets/organisms/services/servicesRow_3/nut-dev.png";
import devops from "../../../assets/organisms/services/servicesRow_3/devops.png";
import qa from "../../../assets/organisms/services/servicesRow_3/qa.png";
import uxui from "../../../assets/organisms/services/servicesRow_3/uxui.png";
import ia_dev from "../../../assets/organisms/services/servicesRow_3/ia-dev.png";
import blockchain from "../../../assets/organisms/services/servicesRow_3/blockchain.png";
import "../../Styles/pages/services/ServicesRow_3.css";

const ServicesRow_3 = () => {
  return (
    <div>
      <div className="s-row-3">
        <div className="s-row-3-container">
          <div className="s-row-3-title">
            <h3>OUR LABS</h3>
            <div className="s-row-2-line"></div>
          </div>
          <div className="s-row-3-content">
            <div className="s-row-3-item">
              <h3>
                <img src={nut_dev} alt="nut_dev" /> Software Development
              </h3>
              <p>
                We provide you with the latest in software development to ensure
                your company is always at the forefront.
              </p>
            </div>
            <div className="s-row-3-item">
              <h3>
                <img src={devops} alt="devops" /> Software Development
              </h3>
              <p>
                Make things easy with DevOps. Our DevOps team is commited to
                syncing your tech operations and development to maximize your
                results and workflow.
              </p>
            </div>
            <div className="s-row-3-item">
              <h3>
                <img src={qa} alt="qa" /> Quality Assurance
              </h3>
              <p>
                High-quality work makes for happy, successful clients and our
                services are vetted and updated to make sure that you receive
                only the best.
              </p>
            </div>
            <div className="s-row-3-item">
              <h3>
                <img src={uxui} alt="uxui" /> UI/UX
              </h3>
              <p>
                We provide you with the latest in software development to ensure
                your company is always at the forefront.
              </p>
            </div>
            <div className="s-row-3-item">
              <h3>
                <img src={ia_dev} alt="ia_dev" /> Artificial Intelligence
              </h3>
              <p>
                Stay at the forefront of technology and use the deep power of
                Artificial Intelligence to create custom services and
                experiences.
              </p>
            </div>
            <div className="s-row-3-item">
              <h3>
                <img src={blockchain} alt="blockchain" /> Blockchain
              </h3>
              <p>
                Blockchain is the new frontier in digital transactions and
                management. We'll take your company to the next level by
                implementing it in a way that most benefits you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRow_3;
