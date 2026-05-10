import { motion } from "framer-motion";

export default function Services() {
  const servicesList = [
    {
      icon: "pi pi-code",
      title: "Full-Stack Web Development",
      description: "Building responsive, robust, and highly scalable web applications using the MERN/PERN stack (React, Node, Express, PostgreSQL/MongoDB).",
    },
    {
      icon: "pi pi-database",
      title: "Database Architecture",
      description: "Designing optimized, normalized, and highly secure database systems with Sequelize ORM and PostgreSQL to ensure quick query execution.",
    },
    {
      icon: "pi pi-desktop",
      title: "ERP & POS Systems",
      description: "Developing custom enterprise solutions, point of sale software, and business automation platforms with custom dashboards.",
    },
    {
      icon: "pi pi-shield",
      title: "Secure API Development",
      description: "Authoring bulletproof RESTful APIs with secure JWT-based role authorizations, data filtering, and role-based data isolation.",
    },
    {
      icon: "pi pi-mobile",
      title: "Responsive UI/UX Design",
      description: "Crafting beautiful, pixel-perfect, and highly interactive user interfaces using SCSS, Framer Motion, and premium frameworks like PrimeReact.",
    },
    {
      icon: "pi pi-cog",
      title: "Automation & Scripting",
      description: "Creating custom Python scripts and cron jobs to automate administrative workflows, data parsing, and repetitive system tasks.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <section className="services" id="services">
      <div className="section-header">
        <h2>My Services</h2>
        <p>Providing high-quality software development services tailored to your business needs.</p>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <motion.div
            className="glass-card service-card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={index}
          >
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
