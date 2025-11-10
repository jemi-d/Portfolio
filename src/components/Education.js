import { motion } from "framer-motion";
import "../styles/Education.css";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    year: "2016 - 2020",
    description: "Graduated with honors. Focused on mobile app development, software engineering, and computer science fundamentals.",
  },
  {
    degree: "High School Diploma",
    institution: "High School Name",
    year: "2014 - 2016",
    description: "Completed high school with focus on mathematics and science subjects.",
  },
];

function Education() {
  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="education-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="education-year">{edu.year}</div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Education;

