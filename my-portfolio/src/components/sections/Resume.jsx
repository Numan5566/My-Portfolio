import { motion } from "framer-motion";

export default function Resume() {
  const education = [
    {
      year: "2020 - 2024",
      title: "Bachelor of Computer Science",
      institution: "Punjab University (PUCIT)",
      details: [
        "Focused on Software Engineering, Database Systems, and Web Technologies.",
        "Graduated with honors, demonstrating excellence in coding and systems design.",
        "Created an advanced ERP as a final year capstone project."
      ]
    },
    {
      year: "2018 - 2020",
      title: "Intermediate in Computer Science (ICS)",
      institution: "Government College, Lahore",
      details: [
        "Acquired foundational knowledge in C++, Computer Architectures, and Mathematics.",
        "Maintained high academic standing and led several programming club events."
      ]
    }
  ];

  const experience = [
    {
      year: "2023 - Present",
      title: "Lead Full-Stack Web Developer",
      institution: "Freelance & Remote Projects",
      details: [
        "Built and launched a highly successful School Management System featuring role-based dashboards for admins, teachers, and parents.",
        "Engineered secure PostgreSQL schemas and custom Node.js/Express backend APIs.",
        "Designed and customized responsive layouts using React and PrimeReact."
      ]
    },
    {
      year: "2024 (Project-Based)",
      title: "ERP System Architect",
      institution: "Enterprise Business Solutions",
      details: [
        "Designed and implemented a role-based ERP solution to manage inventory, sales, and accounts for building materials businesses.",
        "Enforced strict multi-tenant role isolation to secure business data.",
        "Developed custom reporting and analytics charts using chart libraries."
      ]
    },
    {
      year: "2023 (Project-Based)",
      title: "Web Developer",
      institution: "PrimePrep Portal",
      details: [
        "Created a real-time exam preparation platform containing live countdown quizzes.",
        "Integrated detailed dashboard metrics displaying student performance analytics."
      ]
    }
  ];

  const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 50 } }
  };

  return (
    <section className="resume-section" id="resume">
      <div className="section-header">
        <h2>My Resume</h2>
        <p>A timeline of my academic background and professional journey as a developer.</p>
      </div>

      <div className="resume-grid">
        <motion.div
          className="resume-column"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="col-title">
            <i className="pi pi-graduation-cap"></i> Education
          </h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <span className="time-badge">{edu.year}</span>
                <h4>{edu.title}</h4>
                <span className="institution">{edu.institution}</span>
                <ul className="timeline-details">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="resume-column"
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="col-title">
            <i className="pi pi-briefcase"></i> Experience
          </h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <span className="time-badge">{exp.year}</span>
                <h4>{exp.title}</h4>
                <span className="institution">{exp.institution}</span>
                <ul className="timeline-details">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
