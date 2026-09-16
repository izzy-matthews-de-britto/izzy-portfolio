import './Resume.css'

function Resume() {
  return (
    <div className="resumePage">

      {/* NAVIGATION */}
      <nav className="resumeNav">
        <a href="/" className="resumeBrand">
          Izzy Matthews<span>.</span>
        </a>

        <a href="/" className="portfolioLink">
          ← Back to Portfolio
        </a>
      </nav>


      <main className="resumeMain">

        {/* HERO */}
        <section className="resumeHero">

          <p className="resumeLabel">RESUME</p>

          <h1 className="resumeName">
            Izzy Matthews
            <span>De Britto</span>
          </h1>

          <p className="resumeRole">
            Software Engineering Student
          </p>

          <p className="resumeSummary">
            Multilingual (fluent in English and Portuguese,
            intermediate in Spanish), professional and dependable
            with a strong work ethic and attention to detail. Quick
            learner who handles sensitive information with discretion
            and performs well in structured, fast-paced environments,
            valuing accuracy and teamwork.
          </p>

          <div className="resumeButtons">

            <a
              href="/Izzy-Matthews-Resume.pdf"
              download="Izzy-Matthews-Resume.pdf"
              className="downloadButton"
            >
              Download Resume ↓
            </a>

            <a
              href="mailto:isis.de.britto@gmail.com"
              className="contactButton"
            >
              Contact Me ↗
            </a>

          </div>

        </section>


        {/* CONTACT */}
        <section className="contactGrid">

          <div>
            <p>Email</p>
            <a href="mailto:isis.de.britto@gmail.com">
              isis.de.britto@gmail.com
            </a>
          </div>

          <div>
            <p>Phone</p>
            <a href="tel:+16093050926">
              +1 609 305-0926
            </a>
          </div>

          <div>
            <p>Address</p>
            <span>4701 Pacific Ave. Wildwood</span>
          </div>

        </section>


        {/* EXPERIENCE */}
        <section className="resumeSection">

          <div className="sectionHeading">
            <span>01</span>

            <div>
              <p>EXPERIENCE</p>
              <h2>Professional Experience</h2>
            </div>
          </div>


          <div className="experienceList">

            <article className="experience">

              <div className="date">
                CURRENT
              </div>

              <div className="experienceContent">

                <p className="company">
                  CAVU BYOB
                </p>

                <h3>Server</h3>

                <p className="description">
                  Managed customer service, greeted and assisted
                  guests, processed payments, answered phone calls,
                  and handled front desk responsibilities,
                  demonstrating strong communication, multitasking,
                  organization, and the ability to provide friendly
                  and professional service in a fast-paced
                  environment.
                </p>

              </div>

            </article>


            <article className="experience">

              <div className="date">
                2024 — CURRENT
              </div>

              <div className="experienceContent">

                <p className="company">
                  EASY CLEANING
                </p>

                <h3>
                  Owner & Administrative Manager
                </h3>

                <p className="description">
                  Managed scheduling, client communication, and
                  record-keeping for a small business, demonstrating
                  strong organization, attention to detail, and the
                  ability to handle administrative tasks efficiently
                  and professionally.
                </p>

              </div>

            </article>


            <article className="experience">

              <div className="date">
                2022 — 2024
              </div>

              <div className="experienceContent">

                <p className="company">
                  CULTURAL CARE AU PAIR
                </p>

                <h3>Au Pair</h3>

                <p className="description">
                  Managed multiple responsibilities simultaneously
                  in a fast-paced household, demonstrating strong
                  multitasking, time management, and attention to
                  detail skills essential for high-volume service
                  environments.
                </p>

                <p className="description">
                  Built strong relationships through clear
                  communication, patience, and adaptability,
                  consistently meeting expectations and responding
                  calmly to changing situations.
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* EDUCATION */}
        <section className="resumeSection">

          <div className="sectionHeading">
            <span>02</span>

            <div>
              <p>EDUCATION</p>
              <h2>Education</h2>
            </div>
          </div>


          <div className="educationGrid">

            <article className="educationCard">

              <p className="year">
                2023 — CURRENT
              </p>

              <h3>
                Software Engineering
              </h3>

              <p className="school">
                Universidade Cruzeiro do Sul
              </p>

            </article>


            <article className="educationCard">

              <p className="year">
                2017 — 2019
              </p>

              <h3>
                Technical Course in Information Technology
                Integrated with High School
              </h3>

              <p className="school">
                Instituto Federal de Educação, Ciências e Tecnologia
              </p>

            </article>

          </div>

        </section>


        {/* SKILLS */}
        <section className="resumeSection">

          <div className="sectionHeading">
            <span>03</span>

            <div>
              <p>SKILLS</p>
              <h2>Skills</h2>
            </div>
          </div>


          <div className="skillsGrid">
            <div>Customer Service</div>
            <div>Communication Skills</div>
            <div>Document Management</div>
            <div>Computer Skills</div>
            <div>Data Organization</div>
          </div>

        </section>


        {/* LANGUAGES */}
        <section className="resumeSection">

          <div className="sectionHeading">
            <span>04</span>

            <div>
              <p>LANGUAGES</p>
              <h2>Languages</h2>
            </div>
          </div>


          <div className="languagesGrid">

            <div className="languageCard">
              <span>English</span>
              <p>Fluent</p>
            </div>

            <div className="languageCard">
              <span>Portuguese</span>
              <p>Fluent</p>
            </div>

            <div className="languageCard">
              <span>Spanish</span>
              <p>Intermediate</p>
            </div>

          </div>

        </section>


        {/* BOTTOM */}
        <section className="resumeBottom">

          <p>RESUME PDF</p>

          <h2>
            Thanks for stopping by.
          </h2>

          <a
            href="/Izzy-Matthews-Resume.pdf"
            download="Izzy-Matthews-Resume.pdf"
            className="downloadButton"
          >
            Download Resume ↓
          </a>

        </section>

      </main>


      <footer className="resumeFooter">

        <p>
          Designed & built by Izzy © 2026
        </p>

        <a href="/">
          izzymatthews.dev
        </a>

      </footer>

    </div>
  )
}

export default Resume