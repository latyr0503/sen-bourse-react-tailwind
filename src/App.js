import Bourses from "./compoments/Bourses";
import Hero from "./compoments/Hero";
import Navbar from "./compoments/Navbar";
import News from "./compoments/News";
import Partenaires from "./compoments/Partenaires";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bourses />
      <Partenaires />
      <News />
    </>
  );
}

export default App;
