import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    title: "Wellness Companion",
    description:
      "A cross-platform mobile app that helps users track daily habits, integrate wearable device data, and provides personalized health coaching. Built with Flutter and Firebase for real-time synchronization.",
    tags: ["Flutter", "Firebase", "Bloc", "Dart"],
    github: "https://github.com",
    external: "https://example.com",
    featured: true
  },
  {
    title: "Finlytics Dashboard",
    description:
      "A real-time financial dashboard for Android that provides comprehensive analytics and insights. Leverages Kotlin Coroutines, Room database, and Material You design principles for a modern user experience.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Coroutines"],
    github: "https://github.com",
    external: "https://example.com",
    featured: true
  },
  {
    title: "EduSpark",
    description:
      "A mobile-first learning platform with offline-first architecture and collaborative study rooms. Enables students to learn together seamlessly with real-time collaboration features.",
    tags: ["Flutter", "GraphQL", "AWS", "Dart"],
    github: "https://github.com",
    external: "https://example.com",
    featured: false
  },
  {
    title: "Task Manager Pro",
    description:
      "An intuitive task management application with advanced features like project templates, time tracking, and team collaboration. Designed for productivity enthusiasts.",
    tags: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com",
    external: "https://example.com",
    featured: false
  },
  {
    title: "Weather App",
    description:
      "A beautiful weather application with location-based forecasts, detailed weather maps, and customizable widgets. Provides accurate weather information with an elegant UI.",
    tags: ["Flutter", "API Integration", "Location Services"],
    github: "https://github.com",
    external: "https://example.com",
    featured: false
  },
  {
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics tool for social media managers to track engagement, analyze trends, and optimize content strategy across multiple platforms.",
    tags: ["Kotlin", "Retrofit", "Material Design"],
    github: "https://github.com",
    external: "https://example.com",
    featured: false
  }
];

function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Some Things I've Built
        </motion.h2>
        <div className="projects-list">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`project-card featured ${index % 2 === 1 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-content">
                <div className="project-label">Featured Project</div>
                <h3 className="project-title">
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.github}
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
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-image">
                <div className="image-placeholder"></div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.h3
          className="other-projects-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Other Noteworthy Projects
        </motion.h3>
        <div className="other-projects-grid">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="other-project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="other-project-header">
                <div className="other-project-folder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="other-project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <h4 className="other-project-title">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h4>
              <p className="other-project-description">{project.description}</p>
              <ul className="other-project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;

