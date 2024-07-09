import React from "react";
import { Link } from "react-router-dom";

const HeroNav = (props) => {
  return (
    <div className="h-60 bg-gradient-to-r from-sky-400 to-indigo-800 flex items-center justify-center text-white font-bold text-3xl">
      <span><Link to='/'>{props.depart}</Link>  / </span>
      <span> {props.arriver}</span>
    </div>
  );
};

export default HeroNav;
