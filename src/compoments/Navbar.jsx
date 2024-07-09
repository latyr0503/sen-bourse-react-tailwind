import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5">
      <h2 className="text-sky-800 font-black text-4xl">Mon Logo</h2>
      <nav>
        <ul className="flex gap-10 font-semibold">
          <li className=" hover:text-sky-700">Accueil</li>
          <li className=" hover:text-sky-700">A propos</li>
          <li className=" hover:text-sky-700">Bourses</li>
          <li className=" hover:text-sky-700">Blog</li>
          <li className=" hover:text-sky-700">FAQ</li>
        </ul>
      </nav>
      <Button texte="Connexion/Inscription" />
    </div>
  );
};

export default Navbar;
