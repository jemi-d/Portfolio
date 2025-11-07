import { motion } from "framer-motion";
import "../styles/About.css";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I design and build mobile experiences that balance creativity with
        performance. From ideation to deployment, I enjoy collaborating with
        teams to ship polished Flutter, Android, and Kotlin applications that
        delight users.
      </p>
      <p>
        When I am not coding, you can find me exploring new UI patterns,
        contributing to open-source, or experimenting with prototypes that push
        the boundaries of what mobile apps can do.
      </p>
    </motion.section>
  );
}

export default About;

