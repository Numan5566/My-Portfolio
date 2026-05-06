export default function TechStack() {
  const skills = [
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Sequelize",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "SCSS"
  ];

  return (
    <section className="tech-section">
      <h2>Tech Stack</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span className="skill-chip" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}