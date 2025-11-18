import { useEffect, useState } from "react";
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
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const nextClass = theme === "light" ? "theme-light" : "theme-dark";
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(nextClass);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <Home theme={theme} onToggleTheme={toggleTheme} />
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
