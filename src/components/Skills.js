import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/Skills.css";

const experiences = [
  {
    company: "Tech Company",
    role: "Senior Mobile Developer",
    duration: "2022 - Present",
    description: [
      "Developed and maintained mobile applications using Flutter and Kotlin",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Implemented clean architecture and best practices for mobile development",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    company: "Startup Inc",
    role: "Mobile Developer",
    duration: "2020 - 2022",
    description: [
      "Built responsive mobile applications for iOS and Android platforms",
      "Integrated REST APIs and third-party SDKs",
      "Optimized app performance and reduced load times by 40%",
      "Participated in agile development processes"
    ]
  },
  {
    company: "Freelance",
    role: "Mobile App Developer",
    duration: "2019 - 2020",
    description: [
      "Developed custom mobile applications for clients",
      "Worked with various technologies including React Native and Flutter",
      "Delivered projects on time and within budget",
      "Maintained client relationships and provided ongoing support"
    ]
  }
];

function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="experience-content">
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="experience-details">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="experience-role">
                {experiences[activeTab].role}{" "}
                <span className="experience-company">
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <p className="experience-duration">
                {experiences[activeTab].duration}
              </p>
              <ul className="experience-description">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index}>
                    <span className="description-arrow">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;

