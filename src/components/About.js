import { motion } from "framer-motion";
import "../styles/About.css";

const skills = [
  {
    name: "Flutter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.47z" />
      </svg>
    ),
  },
  {
    name: "Dart",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 2.304 1.43l.216.197c1.63 1.482 3.69 3.26 3.69 3.26s2.927 2.926 3.698 3.521c.77.596 1.489 1.482 1.489 2.388 0 .985-.788 1.977-1.489 2.573l-3.698 3.52c-3.26 3.26-8.62 8.62-11.368 11.368-1.024.936-1.489.836-2.068.25l-1.517-1.225L.527 18.89c-.595-.6-.985-1.677-.985-2.388 0-.985.788-1.977 1.489-2.573l3.698-3.52c3.26-3.26 8.62-8.62 11.368-11.368.836-.76 1.024-1.024 2.068-.25z" />
      </svg>
    ),
  },
  {
    name: "Kotlin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 24H0V0h24v24zM2.4 2.4v19.2h19.2V2.4H2.4zm2.8 2.8h13.6L12 13.6 5.2 5.2zm2.8 2.8l4.8 6.4 4.8-6.4H8z" />
      </svg>
    ),
  },
  {
    name: "Android",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.6 9.48c.88 0 1.6.72 1.6 1.6V18.4a2.4 2.4 0 0 1-4.8 0V11.08c0-.88.72-1.6 1.6-1.6zm-11.2 0c.88 0 1.6.72 1.6 1.6V18.4a2.4 2.4 0 0 1-4.8 0V11.08c0-.88.72-1.6 1.6-1.6zM6.4 7.52a.8.8 0 0 1-.34-1.52l1.23-2.2a.5.5 0 0 1 .88.46l-.97 1.74c1.08-.52 2.25-.85 3.5-.96V3.5H9a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1h-1.7v1.54c1.25.11 2.42.44 3.5.96l-.97-1.74a.5.5 0 1 1 .88-.46l1.23 2.2a.8.8 0 0 1-.34 1.52.8.8 0 0 1-.8-.8c0-.05 0-.1.02-.15l-.88-1.57c2 .97 3.34 2.75 3.34 4.82V18.4c0 1.77-1.43 3.2-3.2 3.2H6.4c-1.77 0-3.2-1.43-3.2-3.2V9.82c0-2.07 1.34-3.85 3.34-4.82l-.88 1.57c.02.05.02.1.02.15a.8.8 0 0 1-.8.8zM9.4 6.2a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm6.6 0a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zM12 6.5a4.9 4.9 0 0 0-4.9 4.9V21h9.8v-9.6A4.9 4.9 0 0 0 12 6.5z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.715.72.715 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.884 0-2.604.177-.177.384-.313.602-.402V8.835c-.217-.089-.425-.225-.602-.402-.719-.72-1.884-.72-2.603 0-.72.72-.72 1.884 0 2.604.168.168.353.29.55.382l-2.627 2.627c-.645-.223-1.39-.078-1.907.438-.72.718-.72 1.88 0 2.598.718.718 1.88.718 2.598 0 .533-.533.681-1.317.413-1.97l2.63-2.63c.223.645.077 1.39-.435 1.9-.718.72-1.88.72-2.6 0-.719-.72-.719-1.884 0-2.604.537-.537 1.314-.68 1.976-.413l2.63-2.628c-.268-.662-.124-1.467.413-2.004.718-.718 1.882-.718 2.6 0 .645.215 1.379.065 1.889-.442l2.76-2.76 2.784 2.784c.604.604 1.582.604 2.186 0a1.548 1.548 0 00.002-2.188z" />
      </svg>
    ),
  },
  {
    name: "REST API",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.264 7.51h3.588c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.588V7.51zm0 1.471H8.26c-2.476 0-4.49-2.014-4.49-4.49S5.784 0 8.26 0h3.588v8.981zm-3.719-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.02 3.019 3.02h3.719V1.471H8.545zm3.719 6.02H8.545c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.719V7.51zm-4.588 1.471h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491H8.26c-2.476 0-4.49-2.014-4.49-4.491s2.014-4.49 4.49-4.49zm4.588 7.51H8.26c-1.665 0-3.019-1.355-3.019-3.019s1.355-3.019 3.019-3.019h4.588v6.039zm0-7.51H8.26c-2.476 0-4.49-2.014-4.49-4.49S5.784 0 8.26 0h4.588v7.51z" />
      </svg>
    ),
  },
];

const introPoints = [
  "Design production-ready mobile experiences from idea to store release.",
  "Polyglot engineering across Flutter, Android, Kotlin, and modern tooling.",
  "Collaborate closely with design, QA, and product to move fast without regressions.",
];

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="about-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What I Do
        </motion.h2>
        <motion.div
          className="about-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="about-summary">
            I craft resilient, scalable mobile products that feel fast, look polished,
            and stay maintainable as they grow.
          </p>
          <ul className="about-intro-list">
            {introPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </motion.div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
