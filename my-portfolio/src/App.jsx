import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="tech">
          <TechStack />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;