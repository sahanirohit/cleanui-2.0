import { memo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AboutPage from "./pages/AboutPage";
import Contact from "./components/Contact";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Project />
              <Skill />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Header />
              <Portfolio />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default memo(App);
