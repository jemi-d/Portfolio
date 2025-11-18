import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/Home.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Proficiency", href: "#proficiency" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" }
];


function Home({ theme = "dark", onToggleTheme = () => {} }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home">JD</a>
          </div>
          <ul className="nav-menu">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <motion.a
                  href={item.href}
                  className="nav-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
              aria-pressed={theme === "light"}
            >
              <span className="theme-icon" aria-hidden="true">
                {theme === "light" ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 5.5A6.5 6.5 0 1 0 18.5 12c0-.17 0-.34-.02-.5a5 5 0 0 1-6.98-6z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm8-4a1 1 0 0 1 0 2h-2a1 1 0 1 1 0-2h2zM6 12a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2h2zm9.657-6.657a1 1 0 0 1 1.414 1.414L15.414 8.414a1 1 0 0 1-1.414-1.414l1.657-1.657zM9 15.828a1 1 0 0 1 0 1.414L7.343 18.9a1 1 0 0 1-1.414-1.415l1.657-1.656A1 1 0 0 1 9 15.828zm-.586-9.242L6.758 5.343a1 1 0 0 1 1.414-1.414l1.657 1.657A1 1 0 0 1 8.414 6.586zm8.828 8.828 1.657 1.657a1 1 0 0 1-1.414 1.414l-1.657-1.657a1 1 0 0 1 1.414-1.414zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
                  </svg>
                )}
              </span>
              <span className="theme-label">
                {theme === "light" ? "Dark" : "Light"}
              </span>
            </button>
            <motion.a
              href="/resume.pdf"
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>
        </div>
      </nav>

      <section id="home" className="home">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="home-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className="home-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Dolly.
          </motion.h1>
          <motion.h2
            className="home-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I build things for mobile.
          </motion.h2>
          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I'm a mobile app developer specializing in building exceptional
            digital experiences. Currently focused on building accessible,
            human-centered products using Flutter, Android, and Kotlin.
          </motion.p>
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check out my work!
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <ul>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="social-line"></div>
        </motion.div>

        <motion.div
          className="home-email"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="mailto:dolly@example.com">dolly@example.com</a>
          <div className="email-line"></div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;