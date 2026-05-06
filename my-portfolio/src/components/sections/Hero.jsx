import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>Hello, I'm</p>
        <h1>Muhammad Numan</h1>
        <h3>Full Stack Developer</h3>

        <p>
          I build scalable web applications using React, Node.js & PostgreSQL.
        </p>

        <button className="btn">Hire Me</button>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/assets/profile.png" alt="Muhammad Numan" />
      </motion.div>
    </section>
  );
}