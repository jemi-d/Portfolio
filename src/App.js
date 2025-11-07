import "./App.css";
import "./styles/Home.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import TechnicalStack from "./components/TechnicalStack";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <TechnicalStack />
      <Projects />
      <CaseStudies />
      <ContactMe />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
