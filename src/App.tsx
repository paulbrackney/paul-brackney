import './App.css'

const services = [
  {
    title: 'Custom Website Design',
    description:
      'Clean, mobile-friendly sites built around your brand — so customers find you online and know exactly what you offer.',
    icon: '◆',
  },
  {
    title: 'Menus & Online Presence',
    description:
      'Digital menus, hours, location maps, and reservation links — everything diners and shoppers need before they walk in.',
    icon: '◇',
  },
  {
    title: 'Search & Local Visibility',
    description:
      'Structured pages and local SEO basics so your business shows up when nearby customers search for what you do.',
    icon: '◈',
  },
  {
    title: 'Ongoing Support',
    description:
      'Updates when your menu changes, seasons shift, or you launch a promotion — without the hassle of doing it yourself.',
    icon: '◉',
  },
]

const clients = [
  {
    title: 'Restaurants & Cafés',
    description: 'Menus, photos, hours, and a site that matches the experience inside your door.',
  },
  {
    title: 'Retail & Boutiques',
    description: 'Showcase products, share your story, and make it easy for customers to visit or reach out.',
  },
  {
    title: 'Professional Services',
    description: 'Build trust with a polished site that explains what you do and how to get started.',
  },
  {
    title: 'Growing Local Businesses',
    description: 'A professional web presence that scales as you add locations, services, or staff.',
  },
]

const steps = [
  { number: '01', title: 'Discovery', description: 'We learn about your business, goals, and the customers you want to reach.' },
  { number: '02', title: 'Design', description: 'You review layouts and content direction before anything gets built.' },
  { number: '03', title: 'Build', description: 'We develop a fast, reliable site tailored to how your business actually operates.' },
  { number: '04', title: 'Launch', description: 'We go live, verify everything works, and show you how to request updates.' },
]

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <a href="#" className="nav-logo">
          Brackney<span className="nav-logo-accent">Web</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="nav-cta">
            Start a Project
          </a>
        </div>
      </nav>

      <header className="hero">
        <p className="hero-eyebrow">Web development for local businesses</p>
        <h1>
          Professional websites that help customers find you — and choose you.
        </h1>
        <p className="hero-lead">
          We partner with restaurants and small businesses to build modern, easy-to-manage
          websites that look great on every device and turn online visitors into real-world
          customers.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Schedule a Conversation
          </a>
          <a href="#services" className="btn btn-secondary">
            See What We Offer
          </a>
        </div>
      </header>

      <main>
        <section id="services" className="section">
          <div className="section-header">
            <p className="section-eyebrow">Services</p>
            <h2>Everything you need to show up online with confidence</h2>
            <p className="section-lead">
              No bloated packages or jargon. Just focused web work that helps your business
              get found, look credible, and stay current.
            </p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <span className="card-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-header">
            <p className="section-eyebrow">Who We Work With</p>
            <h2>Built for businesses like yours</h2>
            <p className="section-lead">
              Whether you run a neighborhood restaurant or a growing shop on Main Street,
              we design sites that fit how you actually serve customers.
            </p>
          </div>
          <div className="card-grid card-grid--compact">
            {clients.map((client) => (
              <article key={client.title} className="card card--flat">
                <h3>{client.title}</h3>
                <p>{client.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section">
          <div className="section-header">
            <p className="section-eyebrow">Our Process</p>
            <h2>Clear steps from first call to launch</h2>
            <p className="section-lead">
              You stay involved at every stage. We handle the technical work so you can
              focus on running your business.
            </p>
          </div>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.number} className="step">
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section-alt">
          <div className="section-header">
            <p className="section-eyebrow">Work</p>
            <h2>Client projects coming soon</h2>
            <p className="section-lead">
              We are actively building our portfolio with local businesses. Yours could
              be the first featured here.
            </p>
          </div>
          <div className="portfolio-placeholder">
            <a
              href="https://restaurant.brackney.dev"
              className="portfolio-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://restaurant.brackney.dev/images/hero-main.jpg"
                alt="Golden Lantern Kitchen website preview"
                className="portfolio-card-image"
              />
              <div className="portfolio-card-caption">
                <span className="portfolio-card-title">Golden Lantern Kitchen</span>
                <span className="portfolio-card-label">Restaurant Site</span>
              </div>
            </a>
            <div className="portfolio-slot">
              <span>Local Retail</span>
            </div>
            <div className="portfolio-slot">
              <span>Service Business</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <p className="section-eyebrow">Get in Touch</p>
              <h2>Ready to talk about your website?</h2>
              <p>
                Tell us about your business and what you need online. We will respond
                within one business day with next steps — no pressure, no hard sell.
              </p>
            </div>
            <div className="contact-details">
              <a href="mailto:brackney.dev@gmail.com" className="contact-link">
                brackney.dev@gmail.com
              </a>
              <a href="tel:+14053236531" className="contact-link">
                (405) 323-6531
              </a>
              <a href="mailto:brackney.dev@gmail.com?subject=Website%20Project%20Inquiry" className="btn btn-primary btn-full">
                Email Us to Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-brand">
          Brackney<span className="nav-logo-accent">Web</span>
        </p>
        <p className="footer-tagline">Web development for restaurants and local businesses.</p>
        <p className="footer-meta">&copy; {new Date().getFullYear()} Brackney Web. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
