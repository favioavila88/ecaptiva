import TechStacks from "../../../constants/TechStacks";
import "../../Styles/pages/home/HomeRow_9.css";

const HomeRow_9 = () => {
  return (
    <>
      <div className="row-9">
        <div className="row-9-container">
          <h3 className="row-9-title">OUR TECH STACK</h3>
          <div className="row-9-images-container">
            {TechStacks.map((tech) => {
              return (
                <div key={tech.id}>
                  <img className="row-9-img-1" src={tech.src} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRow_9;
