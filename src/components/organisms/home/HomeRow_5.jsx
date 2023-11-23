import "../../Styles/pages/home/HomeRow_5.css";
import Carrousel from "../carrousel/Carrousel";

const HomeRow_5 = () => {
  return (
    <>
      <section className="row-5" style={{ padding: "70px 15px 20px 15px" }}>
        <div>
          <div className="row-5-title-text">
            <h3 className="row-5-title">WHAT OUR CLIENTS SAY</h3>
          </div>
          <Carrousel />
        </div>
      </section>
    </>
  );
};

export default HomeRow_5;
