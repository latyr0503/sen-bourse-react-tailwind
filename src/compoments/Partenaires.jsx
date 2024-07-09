import React from "react";
import TitreSection from "./TitreSection";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";

const Partenaires = () => {
  const logos = [
    {
      image: logo1,
    },
    {
      image: logo2,
    },
    {
      image: logo3,
    },
    {
      image: logo4,
    },
    {
      image: logo5,
    },
  ];
  return (
    <div className="p-10 flex flex-col items-center ">
      <TitreSection texte="Ils nous font confiance !" />
      <div className="flex py-10">
        {logos.map((item, index) => (
          <img key={index} src={item.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Partenaires;
