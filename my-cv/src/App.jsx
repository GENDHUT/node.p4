import React from 'react';
import { NavBar } from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
