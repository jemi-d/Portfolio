import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "Wellness Companion",
    description:
      "Cross-platform app that tracks daily habits, integrates wearable data, and offers personalized coaching.",
    tags: ["Flutter", "Firebase", "Bloc"],
    link: "#"
  },
  {
    title: "Finlytics Dashboard",
    description:
      "Realtime financial dashboard for Android leveraging Kotlin Coroutines, Room, and Material You design.",
    tags: ["Kotlin", "Compose", "Room"],
    link: "#"
  },
  {
    title: "EduSpark",
    description:
      "Mobile-first learning platform with offline-first architecture and collaborative study rooms.",
    tags: ["Flutter", "GraphQL", "AWS"],
    link: "#"
  }
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(({ title, description, tags, link }) => (
          <motion.article
            key={title}
            className="project-card"
            whileHover={{ translateY: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
          >
            <header>
              <h3>{title}</h3>
              <a href={link} target="_blank" rel="noreferrer">
                View ↗
              </a>
            </header>
            <p>{description}</p>
            <ul>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;

