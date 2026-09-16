import { useState } from 'react'
import './App.css'

function App() {
  const projects = [
    {
      title: 'My Portfolio',
      description: 'A modern personal portfolio built with React.',
      technologies: 'React • JavaScript • CSS',
    },
    {
      title: 'Project Two',
      description: 'A future project that I will add to my portfolio.',
      technologies: 'C# • ASP.NET • SQL',
    },
    {
      title: 'Project Three',
      description: 'Another project showcasing my development skills.',
      technologies: 'JavaScript • React',
    },
  ]

  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length)
  }

  const previousProject = () => {
    setCurrentProject(
      (currentProject - 1 + projects.length) % projects.length
    )
  }

  return (
    <div className="portfolio">

      <nav>
        <h2>Izzy Matthews<span>.</span></h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        <section className="hero">

          <div className="hero-content">
            <p className="hello">Hello, I'm Izzy 👋</p>

            <h1>
              
              <br />
              <span>Software Engineering Student</span>
            </h1>

            <p className="hero-description">
              I love turning ideas into interactive experiences
              through code, design, and problem-solving.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
               Explore My Work →
              </a>

              <a
                href="https://github.com/izzy-matthews-de-britto/izzy-portfolio"
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                GitHub ↗
              </a>

              <a href="#contact" className="button secondary">
                Let's Connect
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="glow"></div>
            <div className="code-card">
              <span>&lt;</span>
              <p>building</p>
              <p>the future</p>
              <span>/&gt;</span>
            </div>
          </div>

        </section>


        <section id="about" className="section">

          <p className="section-label">01 — ABOUT ME</p>

          <h2>Learning. Building. Growing.</h2>

          <p className="section-text">
            I'm a Software Engineering student passionate about
            technology, software development, and cybersecurity.
            I'm constantly learning new technologies and building
            projects to turn what I learn into real-world experience.
          </p>

        </section>


        <section id="projects" className="projects-section">

          <p className="section-label">02 — MY WORK</p>

          <h2>Featured Projects</h2>

          <div className="carousel">

            <button
              className="carousel-button"
              onClick={previousProject}
            >
              ←
            </button>

            <div className="project-card">

              <div className="project-image">
                <span>&lt;/&gt;</span>
              </div>

              <div className="project-info">

                <p className="project-number">
                  0{currentProject + 1}
                </p>

                <h3>{projects[currentProject].title}</h3>

                <p>{projects[currentProject].description}</p>

                <span className="technologies">
                  {projects[currentProject].technologies}
                </span>

              </div>

            </div>

            <button
              className="carousel-button"
              onClick={nextProject}
            >
              →
            </button>

          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={
                  index === currentProject ? 'dot active' : 'dot'
                }
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>

        </section>


        <section id="skills" className="section">

          <p className="section-label">03 — SKILLS</p>

          <h2>Technologies I Work With</h2>

          <div className="skills-grid">
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">C#</div>
            <div className="skill-card">ASP.NET</div>
            <div className="skill-card">SQL</div>
            <div className="skill-card">Git & GitHub</div>
          </div>

        </section>


        <section id="contact" className="contact-section">

          <p className="section-label">04 — CONTACT</p>

          <h2>Let's build something together.</h2>

          <p>
            I'm always open to connecting, learning, and
            collaborating on interesting projects.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="button primary"
          >
            Get In Touch →
          </a>

        </section>

      </main>

      <footer>
        <p>Designed & built by Izzy © 2026</p>
      </footer>

    </div>
  )
}

export default App