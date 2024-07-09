import React from "react";
import Hero from "../compoments/Hero";
import Bourses from "../compoments/Bourses";
import Partenaires from "../compoments/Partenaires";
import News from "../compoments/News";

const Home = () => {
  return (
    <div>
      <Hero />
      <Bourses />
      <Partenaires />
      <News />
    </div>
  );
};

export default Home;
