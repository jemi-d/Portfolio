import { motion } from "framer-motion";
import "../styles/TechnicalStack.css";

const stack = [
  {
    category: "Languages",
    items: ["Dart", "Kotlin", "Java", "TypeScript"]
  },
  {
    category: "Frameworks",
    items: ["Flutter", "Jetpack Compose", "React Native"]
  },
  {
    category: "Tools",
    items: ["Android Studio", "VS Code", "Git", "Firebase", "Figma"]
  }
];

function TechnicalStack() {
  return (
    <motion.section
      id="technical-stack"
      className="technical-stack"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2>Technical Stack</h2>
      <div className="stack-cards">
        {stack.map(({ category, items }) => (
          <motion.article
            key={category}
            className="stack-card"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <h3>{category}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default TechnicalStack;

