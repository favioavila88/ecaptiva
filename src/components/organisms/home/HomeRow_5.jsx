import "../../Styles/pages/home/HomeRow_5.css";
import Carrousel from "../carrousel/Carrousel";
import Frame from "../../molecules/header/Frame";

const HomeRow_5 = () => {
  return (
    <>
      <section className="clients-say">
        <div></div>
        <div>
          <div>
            <div className="rows-title" style={{ marginTop: "30px" }}>
              <Frame text="WHAT OUR CLIENTS SAY" lineClass="rows-title-line" />
            </div>
            <Carrousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeRow_5;
