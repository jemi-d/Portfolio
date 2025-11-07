import { motion } from "framer-motion";
import "../styles/ContactMe.css";

function ContactMe() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Contact Me</h2>
      <p>
        Have a product idea or need a mobile engineer on your team? I would love
        to hear from you. Reach out through the form below or connect on any of
        my channels.
      </p>
      <form className="contact-form">
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Jane Doe" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="jane@example.com" />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project"
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </motion.section>
  );
}

export default ContactMe;

