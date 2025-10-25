import './App.css'

function App() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Paul Brackney</h1>
        <p className="subtitle">Developer & Problem Solver</p>
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