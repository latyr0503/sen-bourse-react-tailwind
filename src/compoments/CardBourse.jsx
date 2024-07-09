import React from "react";
import logoT from "../assets/talents.png";
import { FaRegMap } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const CardBourse = (props) => {
  return (
    <div className="border-solid border-2 rounded-xl border-sky-800 flex p-5 ">
      <img src={logoT} className="h-16 m-2" alt="" />
      <div className="gap-3 flex flex-col">
        <h3 className="text-left font-bold">{props.titre}</h3>
        <p className="text-left text-sm">{props.desc}</p>
        <p className="flex items-center gap-2">
          <FaRegMap /> {props.location}
        </p>
        <div className="flex gap-3 text-sm">
          <button className="flex items-center">
            <FaRegArrowAltCircleRight />
            En Savoir Plus
          </button>
          <p className="flex items-center">
            <FaRegClock />
            {props.temps}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBourse;
