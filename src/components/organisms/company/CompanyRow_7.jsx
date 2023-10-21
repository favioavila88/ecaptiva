import React from "react";
import value01 from "../../../assets/organisms/company/companyRow_7/value-01.png";
import value02 from "../../../assets/organisms/company/companyRow_7/value-02.png";
import value03 from "../../../assets/organisms/company/companyRow_7/value-03.png";
import value04 from "../../../assets/organisms/company/companyRow_7/value-04.png";
import value05 from "../../../assets/organisms/company/companyRow_7/value-05.png";
import "../../Styles/pages/company/CompanyRow_7.css";
import Card from "../carrers/Card";
import Subtitle from "../../atoms/Title";
import Line from "../../atoms/line";
import Frame from "../../molecules/header/Frame";

const CompanyRow_7 = () => {
  return (
    <div className="cp-row-7">
      <div className="cp-row-7-container">
        <div className="cp-row-7-title">
          <Frame text="OUR VALUES" lineClass="cp-row-7-line" />
        </div>
        <div className="cp-row-7-content">
          <div className="cp-row-7-colum">
            <Card
              image={value01}
              title="WE ARE ONE WITH OUR CLIENTS"
              className="cp-row-7-title-column-1"
              content="We are a team because we respect, trust and care for each other.
                       Being motivated internally, we enjoy teaming up with our clients
                       to get valuable software."
            ></Card>
          </div>
          <div className="cp-row-7-colum">
            <Card
              image={value02}
              title="KICKS TARTING INNOVATION TOGETHER"
              className="cp-row-7-title-column-2"
              content="Our teamwork puts innovation in motion through motivation and inspiration.
                       We have an entrepreneurial mindset that allows everyone to be two
                       steps ahead."
            ></Card>
          </div>
          <div className="cp-row-7-colum">
            <Card
              image={value03}
              title="WORK HARD, PLAY EVEN HARDER"
              className="cp-row-7-title-column-3"
              content="We are a diverse and collaborative techie wolf-pack that feels
                       pride and passion about what we do. Because we invest in having
                       fun, we go by the motto “work hard, play even harder."
            ></Card>
          </div>
          <div className="cp-row-7-colum">
            <Card
              image={value04}
              title="WE DON'T SETTLE FOR GOOD, WE DELIVER GREAT"
              className="cp-row-7-title-column-4"
              content="We pride ourselves on achieving high quality products and services
                       through a commitment to innovation, ongoing learning, teamwork and
                       continuous improvement."
            ></Card>
          </div>
          <div className="cp-row-7-colum">
            <Card
              image={value05}
              title="WE CARE"
              className="cp-row-7-title-column-5"
              content="We challenge ourselves at work everyday to reach our goals while
                       contributing to our community needs in the best possible way."
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRow_7;
