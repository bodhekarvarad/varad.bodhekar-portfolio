import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import EducationInfo from './components/EducationInfo'
import Resume from './components/Resume';
import Contact from './components/Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />

<section id="about">
  <About />
</section>

<section id="skills">
  <Skills />
</section>

<section id="projects">
  <Projects />
</section>

<section id="education">
  <EducationInfo />
</section>

<section id="resume">
  <Resume />
</section>

<section id="contact">
  <Contact />
</section>

<Footer />

    </>
  );
}

export default App;