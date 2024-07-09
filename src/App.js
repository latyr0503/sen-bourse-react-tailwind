import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compoments/Navbar";
import Home from "./pages/Home";
import { NoPage } from "./pages/NoPage";
import About from "./pages/About";
import Bourses from "./pages/Bourses";
import Blogs from "./pages/Blogs";
import Faq from "./pages/Faq";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bourses" element={<Bourses />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
