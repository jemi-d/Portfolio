import { motion } from "framer-motion";

const tabs = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#technical-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" }
];

function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.nav
        className="home-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {tabs.map(({ label, href }) => (
          <a key={label} href={href} className="nav-link">
            {label}
          </a>
        ))}
      </motion.nav>
      <h1>Hi, I'm Dolly 👋</h1>
      <p>Mobile App Developer | Flutter | Android | Kotlin</p>
      <a className="cta-button" href="#projects">
        View My Work
      </a>
    </motion.section>
  );
}

export default Home;