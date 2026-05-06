export default function About() {
  return (
    <section className="about">
      <div className="about-img">
        <img src="/assets/images/profile.png" alt="" />
      </div>

      <div className="about-text">
        <h2>About Me</h2>

        <p>
          I am a Full Stack Developer with experience in building scalable and
          efficient web applications using React, Node.js, Express.js and PostgreSQL.
        </p>

        <p>
          I have developed systems like School Management System, ERP, and
          PrimePrep platform focusing on automation, performance, and clean architecture.
        </p>

        <button className="btn">Download CV</button>
      </div>
    </section>
  );
}