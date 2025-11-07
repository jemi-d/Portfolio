import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hi, I'm Dolly 👋</h1>
      <p>Mobile App Developer | Flutter | Android | Kotlin</p>
      <button>View My Work</button>
    </motion.section>
  );
}

export default Home;