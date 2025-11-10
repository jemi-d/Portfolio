import "./App.css";
import "./styles/Home.css";
import Home from "./components/Home";
import About from "./components/About";
import Proficiency from "./components/Proficiency";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Proficiency />
      <Education />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
