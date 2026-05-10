import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "Muhammad developed our custom business ERP system ahead of schedule. His database schemas and strict data isolation middleware saved us from data security risks. Outstanding full-stack skills!",
      name: "David Wilson",
      role: "Operations Director, BuildMat Corp",
      avatar: "DW"
    },
    {
      text: "The School Management System transformed our operations. Parent dashboards, fee records, and exam cards are now fully automated. Numan's React interfaces are truly pixel-perfect!",
      name: "Sarah Jenkins",
      role: "Principal, Oakridge Academy",
      avatar: "SJ"
    },
    {
      text: "A highly dedicated engineer. Muhammad built our test-taking platform with live countdown timers and detailed performance analytics. His Node.js server handles heavy concurrency with ease.",
      name: "Alex Martinez",
      role: "Lead Product Manager, PrimePrep",
      avatar: "AM"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 80
      }
    })
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-header">
        <h2>Client Reviews</h2>
        <p>What my clients and project partners say about my work and technical contributions.</p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <motion.div
            className="glass-card testimonial-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={index}
          >
            <div>
              <div className="quote-icon">
                <i className="pi pi-bookmark"></i>
              </div>
              <p className="testimonial-text">"{review.text}"</p>
            </div>

            <div className="client-info">
              <div className="client-avatar">
                {review.avatar}
              </div>
              <div className="client-meta">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
