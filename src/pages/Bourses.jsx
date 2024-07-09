import React from "react";
import HeroNav from "../compoments/HeroNav";
import CardBourse from "../compoments/CardBourse";

const Bourses = () => {
  const tables = [
    {
      titre: "Bourse de formation en DEV",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Dakar",
      temps: "il y'a 2 min",
    },
    {
      titre: "Bourse de formation en Markting",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Thies",
      temps: "il y'a 4 min",
    },
    {
      titre: "Bourse de formation en Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "St Louis",
      temps: "il y'a 5 min",
    },
    {
      titre: "Bourse de formation en Bureautique",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Fatick",
      temps: "il y'a 1 min",
    },
    {
      titre: "Bourse de formation en Gestion",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Diourbel",
      temps: "il y'a 9 min",
    },
    {
      titre: "Bourse de formation en DEV",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Mbour",
      temps: "il y'a 2 min",
    },
    {
      titre: "Bourse de formation en DEV",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Dakar",
      temps: "il y'a 2 min",
    },
    {
      titre: "Bourse de formation en Markting",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Thies",
      temps: "il y'a 4 min",
    },
    {
      titre: "Bourse de formation en Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "St Louis",
      temps: "il y'a 5 min",
    },
    {
      titre: "Bourse de formation en Bureautique",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Fatick",
      temps: "il y'a 1 min",
    },
    {
      titre: "Bourse de formation en Gestion",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Diourbel",
      temps: "il y'a 9 min",
    },
    {
      titre: "Bourse de formation en DEV",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Mbour",
      temps: "il y'a 2 min",
    },
    {
      titre: "Bourse de formation en DEV",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Dakar",
      temps: "il y'a 2 min",
    },
    {
      titre: "Bourse de formation en Markting",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Thies",
      temps: "il y'a 4 min",
    },
    {
      titre: "Bourse de formation en Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "St Louis",
      temps: "il y'a 5 min",
    },
    {
      titre: "Bourse de formation en Bureautique",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Fatick",
      temps: "il y'a 1 min",
    },
    {
      titre: "Bourse de formation en Gestion",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Diourbel",
      temps: "il y'a 9 min",
    },
    {
      titre: "Bourse de formation en DEV",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      location: "Mbour",
      temps: "il y'a 2 min",
    },
  ];
  return (
    <div>
      <HeroNav depart="Accueil" arriver="Bourses" />
      <div className="grid grid-cols-3 gap-6 p-10">
        {tables.map((item, index) => (
          <CardBourse
            key={index}
            titre={item.titre}
            desc={item.desc}
            location={item.location}
            temps={item.temps}
          />
        ))}
      </div>
    </div>
  );
};

export default Bourses;
