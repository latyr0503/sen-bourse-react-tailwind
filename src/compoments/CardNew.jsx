import React from "react";
import { FaRegCalendar, FaRegClock } from "react-icons/fa";
import imageG from "../assets/group-friends-standing-outside-clothing-store-city.jpg";

const CardNew = (props) => {
  return (
    <div className="flex drop-shadow-lg flex-col gap-5 border-solid border-2 rounded-xl border-sky-800 p-5">
      <img className="rounded-xl" src={imageG} alt="" />
      <div className="flex justify-between">
        <p className="flex gap-2 items-center">
          <FaRegCalendar /> {props.date}
        </p>
        <p className="flex gap-2 items-center">
          <FaRegClock /> {props.heure}
        </p>
      </div>
      <h3 className="text-sky-800 text-2xl font-semibold">{props.titre}</h3>
      <p>
        <span>{props.auteur}</span> -<span>{props.post}</span> -
        <span>{props.source}</span>
      </p>
    </div>
  );
};

export default CardNew;
