import React, { useState } from "react";
import "./portfolio.css";
import profileImg from "./assets/photo.jpeg";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "page dark" : "page"}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <span className="nav-logo">Sahil Sangale</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" onClick={handleToggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      <div className="container">
        {/* HERO / HEADER */}
        <header className="header" id="about">
          <div className="hero-text">
            <h1 className="name">SAHIL SANGALE</h1>
            <p className="tagline">
              <h4>Software Developer • Web Technologies • Machine Learning</h4>
            </p>
            <p className="objective">
              Results-driven Software Developer with solid expertise in Web
              Technologies, Object-Oriented Programming (OOP), Database Systems,
              and Machine Learning. Strong problem-solving abilities and a
              continuous learner, aiming to strengthen proficiency in C++.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View Projects
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>

              {/* ⭐ RESUME DOWNLOAD BUTTON ADDED HERE */}
              <a
                href="/sahil_resume.pdf"
                download
                className="btn secondary-btn"
              >
                📄 Download Resume
              </a>
            </div>

            <div className="contact hero-contact">
              <a href="mailto:sahilsangale024@gmail.com">
                📩 sahilsangale024@gmail.com
              </a>
              <span></span>
              
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/sahil-sangale-82a1842a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 LinkedIn
              </a>
              &nbsp;&nbsp;

              <a
                href="https://github.com/sahilsangle24"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <img
              src={profileImg}
              alt="Sahil Sangale"
              className="profile-photo"
            />
          </div>
        </header>

        {/* TECHNICAL SKILLS */}
        <section className="section fade-in" id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Programming Languages</h3>
              <p>C++, Python</p>
            </div>
            <div className="skill-card">
              <h3>Web Technologies</h3>
              <p>HTML5, CSS3, Bootstrap, JavaScript, React.js, Node.js</p>
            </div>
            <div className="skill-card">
              <h3>Databases</h3>
              <p>SQL, MongoDB</p>
            </div>
            <div className="skill-card">
              <h3>Machine Learning</h3>
              <p>Supervised Learning, Unsupervised Learning</p>
            </div>
            <div className="skill-card">
              <h3>Development Tools</h3>
              <p>Git, GitHub, VS Code, Hoppscotch</p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section fade-in" id="education">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Vasantdada Patil College Of Engineering</h3>
                <p>B.E in Information Technology</p>
                <p>CGPA : 7.2 (6 sem)</p>
                <span className="timeline-date">Nov 2022 – May 2026</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>S.V.K.T Junior College</h3>
                <p>Higher Senior Secondary (Class XII)</p>
                <p>Percentage : 59.00</p>
                <span className="timeline-date">March 2022</span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>Nutan Vidhyamandir Deolali Camp</h3>
                <p>Senior Secondary (Class X)</p>
                <p>Percentage : 86.60</p>
                <span className="timeline-date">March 2020</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section fade-in" id="projects">
          <h2>Projects</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>Wanderlust – Travel Web Application</h3>
              <p>
                Developed a full-stack travel web application for exploring
                destinations, planning trips, and managing itineraries. Built
                frontend with HTML, CSS, JavaScript, backend with
                Node.js/Express, and MongoDB for data management, including user
                authentication, CRUD operations, and responsive design for a
                seamless user experience
              </p>
              <div className="card-actions">
                <button className="btn ghost-btn" disabled>
                  Live Demo (coming soon)
                </button>
              </div>
            </div>

            <div className="card">
              <h3>RAG-Based AI Teaching Assistant with Chatbot</h3>
              <p>
                Developed an AI teaching assistant using RAG to provide
                accurate, context-aware answers directly through a
                conversational chatbot. Integrated natural language
                understanding and efficient data retrieval for an interactive
                and seamless learning experience.
              </p>
              <div className="card-actions">
                <button className="btn ghost-btn" disabled>
                  Live Demo (coming soon)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section fade-in" id="experience">
          <h2>Experience</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>IBMSkillbuild – Web Development Intern</h3>
              <p>
                Hands-on experience with HTML, CSS, and JavaScript, enhancing
                development skills. Developed a clientspecific website and
                delivered 3 responsive projects, ensuring design consistency and
                mobile compatibility.
              </p>
            </div>

            <div className="card">
              <h3>TNS India Foundation – AI & ML</h3>
              <p>
                Hands-on experience in Python, data preprocessing, and ML model
                development using Pandas, NumPy, and Scikit-learn. Enhanced
                problem-solving, analytical, teamwork, adaptability, and
                communication skills through real-world projects.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
       <section className="section fade-in" id="certifications">
  <h2>Certifications</h2>

  <div className="cert-container">
    <div className="cert-card">
      <span className="cert-icon">📘</span>
      <p className="cert-title">NPTEL – Data Science For Engineering</p>
    </div>

    <div className="cert-card">
      <span className="cert-icon">💻</span>
      <p className="cert-title">
        Web Development Course – Apna College (Shraddha Khapra, IIT Alumni)
      </p>
    </div>
  </div>
</section>


        {/* CONTACT */}
        <section className="section fade-in" id="contact">
          <h2>Contact</h2>

          <div className="contact-grid">
            <div>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:sahilsangale024@gmail.com">
                  sahilsangale024@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919604249736">+91 9604249736</a>
              </p>
              <p>
                <strong>Location:</strong> Mumbai,India
              </p>
            </div>
            <div>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/sahil-sangale-82a1842a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sahil-sangale-82a1842a4
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/sahilsangle24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sahilsangle24
                </a>
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Sahil Sangale</p>
        </footer>
      </div>
    </div>
  );
}
