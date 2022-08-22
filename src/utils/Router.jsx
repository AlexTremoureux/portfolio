import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Formation from "../pages/Formation";
import HomePage from "../pages/HomePage";
import Page404 from "../pages/Page404";
import Projects from "../pages/Projects";

export const Router = () => (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/à-propos" element={<About />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );