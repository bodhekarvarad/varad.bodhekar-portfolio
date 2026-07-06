import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationInfo from "./components/EducationInfo";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />

              <section id="about">
                <About />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="education">
                <EducationInfo />
              </section>

              <section id="resume">
                <Resume />
              </section>

              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;