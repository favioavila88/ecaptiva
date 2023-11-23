import React from "react";
import CarrouselCard from "./CarrouselCard";

const Carrousel = () => {
  const opinions = [
    {
      id: "op1",
      text: `Captiva team has always a nice attitude, they are very well
      trained and are always looking for the best possible solution at
      their reach, making for us very good quality websites and
      applications`,
      whom: `Daniel Tenzi / NLX IT Director - `,
      link: "www.history.com",
    },
    {
      id: "op2",
      text: `Captiva is exceptional to work with. They are quick on
      development, highly responsive to problems, and very
      collaborative in helping us define needs. I highly recommend
      them!`,
      whom: `Andrew Hall / Systems Product Manager - `,
      link: "lds.org",
    },
    {
      id: "op3",
      text: `They've been really good to work with, and they have exceeded
      expectations all along`,
      whom: `Charlie Moore / CEO, MuniAxis - `,
      link: "www.muniaxis.com",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CarrouselCard list={opinions} />
    </div>
  );
};

export default Carrousel;
