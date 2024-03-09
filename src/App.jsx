
import style from "./App.module.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Nav/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {


  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>

    </>
  )
}

export default App
