import React from "react";
import TitreSection from "./TitreSection";
import CardNew from "./CardNew";
import Button from "./Button";

const News = () => {
  const date = new Date().toLocaleDateString();
  const heure = new Date().toLocaleTimeString();

  const news = [
    {
      titre: "Formation certifiante en Dev mobile",
      auteur: "Coumba Sow",
      post: "Web Dev",
      source: "Xarala",
      date: date,
      heure: heure,
    },
    {
      titre: "Revolutionner l'acces aux bourses de formation",
      auteur: "Barra Diallo",
      post: "Reacteur Web",
      source: "SenBourseEdu",
      date: date,
      heure: heure,
    },
    {
      titre: "L'interet du design graphique",
      auteur: "Racky Aidara",
      post: " Web Design",
      source: "SenDesign",
      date: date,
      heure: heure,
    },
  ];

  return (
    <div className="p-10 flex flex-col items-center ">
      <TitreSection texte="Nos dernieres publications" />
      <div className="grid grid-cols-3 gap-6 py-10">
        {news.map((item, index) => (
          <CardNew
            key="index"
            titre={item.titre}
            auteur={item.auteur}
            post={item.post}
            source={item.source}
            date={item.date}
            heure={item.heure}
          />
        ))}
      </div>
      <Button texte="Voir Plus" />
    </div>
  );
};

export default News;
