import React from "react";
import Button from "./Button";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-5">
        <h2 className="text-sky-800 font-black text-4xl">
          <Link to="/">Mon Logo</Link>
        </h2>
        <nav>
          <ul className="flex gap-10 font-semibold">
            <li className=" hover:text-sky-700">
              <Link to="/">Accueil</Link>
            </li>
            <li className=" hover:text-sky-700">
              <Link to="/about">A propos</Link>
            </li>
            <li className=" hover:text-sky-700">
              <Link to="/bourses">Bourses</Link>
            </li>
            <li className=" hover:text-sky-700">
              <Link to="/blogs">Blog</Link>
            </li>
            <li className=" hover:text-sky-700">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
        <Button texte="Connexion/Inscription" />
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
