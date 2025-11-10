import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/Proficiency.css";

const proficiencies = [
  { name: "Android Native", percentage: 70 },
  { name: "Flutter Cross Platform", percentage: 70 },
  { name: "Programming", percentage: 80 },
  { name: "Backend", percentage: 30 },
];

function Proficiency() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="proficiency"
      className="proficiency"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="proficiency-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proficiency
        </motion.h2>
        <div className="proficiency-list">
          {proficiencies.map((item, index) => (
            <motion.div
              key={item.name}
              className="proficiency-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="proficiency-header">
                <span className="proficiency-name">{item.name}</span>
                <span className="proficiency-percentage">{item.percentage}%</span>
              </div>
              <div className="progress-bar-container">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Proficiency;

