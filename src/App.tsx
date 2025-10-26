import './App.css'

function App() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Paul Brackney</h1>
        <p className="subtitle">Software Engineer</p>
        <div className="bio">
          <p>
            Welcome to my personal website! I deeply enjoy building products that create raving fans. I've also 
            found it's crucial to continue learning new things, and I'm passionate about helping others do the same.
            <br /> <br />
            When I'm not coding, I recharge by spending time with family, playing a round of disc golf, 
            watching my favorite sports teams, and occasionally travelling somewhere awesome.
          </p>
        </div>
      </header>
      
      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <div className="experience-logo">
              <img src="/tbb-logo.png" alt="TBB" />
            </div>
            <p className="experience-caption">Senior Software Developer</p>
            <p className="experience-dates">Mar. 2025 - Present</p>
          </div>
          
          <div className="experience-item">
            <div className="experience-logo">
              <img src="/paycom-logo.png" alt="Paycom" />
            </div>
            <p className="experience-caption">Software Developer</p>
            <p className="experience-dates">Dec. 2022 - Dec. 2024</p>
          </div>

          <div className="experience-item">
            <div className="experience-logo">
              <img src="/paycom-logo.png" alt="Paycom" />
            </div>
            <p className="experience-caption">QA Analyst</p>
            <p className="experience-dates">Aug. 2021 - Dec. 2022</p>
          </div>
        </div>
      </section>
      
      <section className="education">
        <h2>Education</h2>      
        <div className="education-grid">
          <div className="education-item">
            <div className="education-logo">
              <img src="/osu-logo.png" alt="Oklahoma State University" />
            </div>
            <p className="education-caption">B.S. in Computer Science</p>
          </div>
          
          <div className="education-item">
            <div className="education-logo">
              <img src="/ou-logo.png" alt="University of Oklahoma" />
            </div>
            <p className="education-caption">B.S. in Mathematics</p>
          </div>

          <div className="education-item">
            <div className="education-logo">
              <img src="/cribl-university.svg" alt="Cribl University" />
            </div>
            <p className="education-caption">Cribl Certified User</p>
          </div>
        </div>
      </section>
      
      <main className="content">
        <section className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            <a href="/react-calculator/" className="project-card">
              <div className="project-logo">
                <img src="/calculator-logo.svg" alt="Calculator" />
              </div>
              <p className="project-caption">React Calculator</p>
              <p className="project-description">A modern, responsive calculator built with React and TypeScript.</p>
            </a>
            
            <a href="/ian" className="project-card">
              <div className="project-logo">
                <img src="/ian-ai-logo.WEBP" alt="Ian AI" />
              </div>
              <p className="project-caption">Ian AI</p>
              <p className="project-description">
                A generative AI chatbot programmed to tell goat jokes and the history of Criblania.
              </p>
            </a>
            
            <a href="/goatlogs" className="project-card">
              <div className="project-logo">
                <img src="/goatlogs-logo.PNG" alt="Goatlogs" />
              </div>
              <p className="project-caption">Goat Logs</p>
              <p className="project-description">
                Data table with robust search and filtering, with information about recent
                goat events.
              </p>
            </a>
          </div>
        </section>
        
        <section className="photo-gallery">
          <h2>Hobbies & Interests</h2>
          <div className="gallery-grid">
            <div className="photo-item">
              <div className="photo-placeholder">
                <span>📸</span>
              </div>
              <p className="photo-caption">Sunset over the mountains during a hiking trip in Colorado</p>
            </div>
            
            <div className="photo-item">
              <div className="photo-placeholder">
                <span>🏔️</span>
              </div>
              <p className="photo-caption">Reaching the summit after a challenging climb</p>
            </div>
            
            <div className="photo-item">
              <div className="photo-placeholder">
                <span>🌊</span>
              </div>
              <p className="photo-caption">Coastal photography session capturing the waves</p>
            </div>
            
            <div className="photo-item">
              <div className="photo-placeholder">
                <span>🏛️</span>
              </div>
              <p className="photo-caption">Exploring ancient architecture during European travels</p>
            </div>
            
            <div className="photo-item">
              <div className="photo-placeholder">
                <span>🍳</span>
              </div>
              <p className="photo-caption">Cooking up new recipes in my home kitchen</p>
            </div>
            
            <div className="photo-item">
              <div className="photo-placeholder">
                <span>📚</span>
              </div>
              <p className="photo-caption">Reading and learning about new technologies</p>
            </div>
          </div>
        </section>
        
        <section className="about" />
      </main>
      
      <footer className="footer">
        <div className="contact-info">
          <p className="contact-item">
            <a href="mailto:brackney.dev@gmail.com" className="contact-link">brackney.dev@gmail.com</a>
          </p>
          <p className="contact-item">
            <a href="tel:+4053236531" className="contact-link">(405)323-6531</a>
          </p>
        </div>
        <p className="footer-text">
          Built with React and TypeScript, and deployed with Vercel
        </p>
      </footer>
    </div>
  )
}

export default App