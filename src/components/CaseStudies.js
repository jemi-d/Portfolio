import { motion } from "framer-motion";
import "../styles/CaseStudies.css";

const studies = [
  {
    company: "GlowUp Fitness",
    challenge:
      "Improve retention for a subscription-based workout app with declining engagement.",
    solution:
      "Introduced adaptive workout plans, rich push notifications, and in-app progress milestones.",
    outcome: "35% increase in weekly active users over three months.",
    year: "2024"
  },
  {
    company: "PayWave",
    challenge: "Slow onboarding for a fintech product with strict compliance flows.",
    solution:
      "Redesigned the onboarding funnel, added biometric login, and integrated background verification APIs.",
    outcome: "Onboarding completion time reduced by 48% and support tickets dropped by 60%.",
    year: "2023"
  }
];

function CaseStudies() {
  return (
    <motion.section
      id="case-studies"
      className="case-studies"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Case Studies</h2>
      <div className="studies-list">
        {studies.map(({ company, challenge, solution, outcome, year }) => (
          <motion.article
            key={company}
            className="study-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <header>
              <span>{year}</span>
              <h3>{company}</h3>
            </header>
            <dl>
              <div>
                <dt>Challenge</dt>
                <dd>{challenge}</dd>
              </div>
              <div>
                <dt>Solution</dt>
                <dd>{solution}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{outcome}</dd>
              </div>
            </dl>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default CaseStudies;

