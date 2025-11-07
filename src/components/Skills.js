import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  "Flutter",
  "Dart",
  "Kotlin",
  "Android SDK",
  "Firebase",
  "REST APIs",
  "UI/UX Collaboration",
  "CI/CD"
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="skill-card"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;

