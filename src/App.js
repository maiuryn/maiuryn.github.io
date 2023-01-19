import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <>
      <Navbar />
      
      <div className="pt-[150px]">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
