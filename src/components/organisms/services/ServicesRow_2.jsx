import React from "react";

import team1 from "../../../assets/organisms/services/servicesRow_2/team-1-2.png";
import agile_team from "../../../assets/organisms/services/servicesRow_2/agile-team-2.png";
import box_close from "../../../assets/organisms/services/servicesRow_2/box-close-2.png";

import "../../Styles/pages/services/ServicesRow_2.css";
import Card from "../carrers/Card";
import Frame from "../../molecules/header/Frame";

const ServicesRow_2 = () => {
  return (
    <div>
      <div className="s-row-2">
        <div className="s-row-2-container">
          <div className="cp-row-7-title">
            <Frame text="BUSINESS MODELS" lineClass="s-row-2-line" />
            {/* <h3>BUSINESS MODELS</h3>
            <div className="s-row-2-line"></div> */}
          </div>
          <div className="s-row-2-content">
            <div className="s-row-2-item">
              <Card
                image={team1}
                title="Staff Augmentation"
                subtitle="HIRE TOP TALENT ON DEMAND"
                content="With access to our elite candidates, you can fast-track
                        your way to a great team. Our applicants can start working
                        remotely for you in just two to four weeks and are ready
                        to be interviewed whenever you say the word."
              ></Card>
            </div>
            <div className="s-row-2-item">
              <Card
                image={agile_team}
                title="Dedicated Agile Teams"
                subtitle="TOP-NOTCH TEAM LEADERSHIP"
                content="Your projects will be overseen by our specialist Software
                        Architects and Scrum Masters trained in Agile Scrum methodology,
                        giving you only the best and latest in information technology."
              ></Card>
            </div>
            <div className="s-row-2-item">
              <Card
                image={box_close}
                title="Innovation Projects"
                subtitle="KNOW EXACTLY WHAT YOU NEED? LET'S MAKE IT HAPPEN"
                content="Our innovation program zeroes in on small-scale projects,
                        bringing them to completion within a set time frame and budget.
                        Our approach is clear, efficient, and effective."
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesRow_2;
