import React from "react";
import image from "../assets/Capture d’écran du 2024-07-09 10-38-42.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 items-center p-10">
      <div>
        <h1 className="text-6xl font-semibold text-sky-800">Facilitez votre acces aux Opportinutés de formation</h1>
        <p className="py-7 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nihil
          amet debitis sint reiciendis autem quas laboriosam ratione ad corrupti
          totam, eligendi rem repellat dicta hic ullam, quis impedit, voluptatem
          soluta doloremque iste commodi animi nulla! Similique temporibus,
          error ratione, quasi molestias placeat numquam atque ab fugit
          molestiae nobis at.
        </p>
        <div className="flex gap-5">
          <Button texte="Inscrivez-vous !" />
          <button className="relative group cursor-pointer text-sky-800 border-solid border-2 border-sky-800 overflow-hidden h-12 w-64 rounded-md bg-transparent p-2 flex justify-center items-center font-extrabold">
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-400"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-300"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-200"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-100"></div>
            <p className="z-10">Voir nos Offres</p>
          </button>
        </div>
      </div>
      <div className="">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
