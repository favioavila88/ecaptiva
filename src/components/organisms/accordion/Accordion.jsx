import React from "react";
import Collapse from "./Collapse";
import "../../Styles/organisms/accordion/Accordion.css";

const Accordion = ({ items, limit }) => {
  return (
    <div>
      <Collapse subitems={items} limit={limit} collapsed>
        <div className="row-9-images-container">
          {items.map((item) => {
            if (item.index >= limit) {
              return (
                <div key={item.id}>
                  <img className="row-9-img-1" src={item.src} />
                </div>
              );
            }
          })}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
