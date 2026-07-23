import { useState } from 'react'
import './App.css'
import { Logo } from './components/Logo'

const services = [
  {
    title: 'Custom Website Design',
    description:
      'Clean, mobile-friendly sites built around your brand — so customers find you online and know exactly what you offer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 20h8" />
      </svg>
    ),
  },
  {
    title: 'Local Search Visibility',
    description:
      'Structured pages and local SEO basics so your business shows up when nearby customers search for what you do.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: 'Menus, Booking & More',
    description:
      'Digital menus, service pages, contact forms, and maps — everything customers need before they walk in or call.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M4 6h16M4 12h10M4 18h14" />
        <circle cx="19" cy="18" r="3" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Support',
    description:
      'Updates when your hours change, seasons shift, or you launch a promotion — without the hassle of doing it yourself.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
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
    title: 'Trades & Services',
    description: 'Build trust with a polished site that explains what you do, where you work, and how to get a quote.',
  },
  {
    title: 'Growing Local Businesses',
    description: 'A professional web presence that scales as you add locations, services, or staff.',
  },
]

const steps = [
  { number: '01', title: 'Discovery', description: 'We learn about your business, goals, and the customers you want to reach.' },
  { number: '02', title: 'Build', description: 'We develop a fast, reliable site tailored to how your business actually operates.' },
  { number: '03', title: 'Review', description: 'You review the site and share feedback. We refine until you are happy with the result.' },
  { number: '04', title: 'Launch', description: 'We go live, verify everything works, and show you how to request updates.' },
]

const highlights = [
  { value: 'Mobile-first', label: 'Sites that look great on every phone and tablet' },
  { value: 'Local focus', label: 'Built to help nearby customers find and choose you' },
  { value: 'No jargon', label: 'Clear pricing conversations and straightforward process' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <nav className="nav">
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <Logo />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="site-menu" className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Start a Project
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <p className="hero-eyebrow">Websites for local businesses</p>
        <h1>
          Your business deserves a website that{' '}
          <span className="hero-highlight">wins customers</span> — not one that holds you back.
        </h1>
        <p className="hero-lead">
          Immaculate Web Solutions partners with small and medium-sized local businesses to build
          modern, easy-to-manage websites that look professional on every device and turn online
          visitors into real-world customers.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get a Free Consultation
          </a>
          <a href="#work" className="btn btn-secondary">
            See Our Work
          </a>
        </div>

        <ul className="hero-highlights">
          {highlights.map((item) => (
            <li key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <section id="services" className="section">
          <div className="section-header">
            <p className="section-eyebrow">Services</p>
            <h2>Everything you need to show up online with confidence</h2>
            <p className="section-lead">
              No bloated packages or tech jargon. Just focused web work that helps your business
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
              Whether you run a neighborhood restaurant, a shop on Main Street, or a growing
              service company, we design sites that fit how you actually serve customers.
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

        <section id="work" className="section section-alt">
          <div className="section-header">
            <p className="section-eyebrow">Our Work</p>
            <h2>Real sites for real local businesses</h2>
            <p className="section-lead">
              Every project is tailored to the business behind it — from restaurants and retail
              to trades and professional services.
            </p>
          </div>
          <div className="portfolio-placeholder">
            <a
              href="https://restaurant.immaculatewebsolutions.com"
              className="portfolio-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://restaurant.immaculatewebsolutions.com/images/hero-main.jpg"
                alt="Golden Lantern Kitchen website preview"
                className="portfolio-card-image"
              />
              <div className="portfolio-card-caption">
                <span className="portfolio-card-title">Golden Lantern Kitchen</span>
                <span className="portfolio-card-label">Restaurant Site</span>
              </div>
            </a>
            <a
              href="https://lawncare.immaculatewebsolutions.com"
              className="portfolio-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/portfolio/greenedge-lawn.jpg"
                alt="GreenEdge Lawn & Landscape website preview"
                className="portfolio-card-image"
              />
              <div className="portfolio-card-caption portfolio-card-caption--green">
                <span className="portfolio-card-title">GreenEdge Lawn & Landscape</span>
                <span className="portfolio-card-label">Lawn Care Site</span>
              </div>
            </a>
            <a
              href="https://welding.immaculatewebsolutions.com"
              className="portfolio-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/portfolio/brackney-welding.jpg"
                alt="Brackney Welding & Fabrication website preview"
                className="portfolio-card-image"
              />
              <div className="portfolio-card-caption portfolio-card-caption--steel">
                <span className="portfolio-card-title">Brackney Welding & Fabrication</span>
                <span className="portfolio-card-label">Welding & Fabrication Site</span>
              </div>
            </a>
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
              <a href="mailto:hello@immaculatewebsolutions.com" className="contact-link">
                hello@immaculatewebsolutions.com
              </a>
              <a href="tel:+14053236531" className="contact-link">
                (405) 323-6531
              </a>
              <a href="mailto:hello@immaculatewebsolutions.com?subject=Website%20Project%20Inquiry" className="btn btn-primary btn-full">
                Email Us to Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#" className="footer-brand">
          <Logo />
        </a>
        <p className="footer-tagline">Professional websites for small and medium-sized local businesses.</p>
        <p className="footer-meta">&copy; {new Date().getFullYear()} Immaculate Web Solutions. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
