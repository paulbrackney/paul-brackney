import './App.css'

function App() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Paul Brackney</h1>
        <p className="subtitle">Software Engineer</p>
        <div className="bio">
          <p>
            I'm a passionate software engineer who loves building innovative solutions 
            and exploring the world through travel and photography. When I'm not coding, 
            you'll find me hiking mountain trails, capturing moments with my camera, 
            or discovering new cultures around the globe.
          </p>
        </div>
      </header>
      
      <main className="content">
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>React Calculator</h3>
            <p>A modern, responsive calculator built with React and TypeScript.</p>
            <a href="/react-calculator/" className="project-link">
              Try the Calculator →
            </a>
          </div>
          
          <div className="project-card">
            <h3>Ian the Goat</h3>
            <p>An interactive web experience featuring Ian the Goat with engaging animations and user interactions.</p>
            <a href="/ian" className="project-link">
              Meet Ian →
            </a>
          </div>
          
          <div className="project-card">
            <h3>Goatlogs</h3>
            <p>A comprehensive logging and tracking application designed for efficient data management and analysis.</p>
            <a href="/goatlogs" className="project-link">
              View Goatlogs →
            </a>
          </div>
        </section>
        
        <section className="resume">
          <h2>Resume</h2>
          <div className="resume-card">
            <div className="resume-info">
              <h3>Paul Brackney - Software Engineer</h3>
              <p>Download my resume to learn more about my experience, skills, and qualifications.</p>
            </div>
            <div className="resume-actions">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link view">
                📄 View Resume
              </a>
              <a href="/resume.pdf" download="Paul_Brackney_Resume.pdf" className="resume-link download">
                💾 Download PDF
              </a>
            </div>
          </div>
        </section>
        
        <section className="photo-gallery">
          <h2>Travels & Hobbies</h2>
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
        
        <section className="about">
          <h2>About</h2>
          <p>
            Welcome to my personal website. I'm a developer passionate about 
            creating clean, efficient, and user-friendly applications.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App