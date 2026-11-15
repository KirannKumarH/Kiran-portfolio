import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';

function Sequence({ items, label }) {
  return (
    <ol className="architecture-sequence" aria-label={label}>
      {items.map((item, index) => (
        <li key={item.title}>
          <span className="sequence-index">{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

function EvidencePairs({ items }) {
  return <div className="evidence-pairs">{items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>;
}

export default function CaseStudyPage({ project }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main" className="case-study page-shell">
        <nav className="case-breadcrumb" aria-label="Breadcrumb"><Link to="/">Portfolio</Link><span aria-hidden="true">/</span><span>{project.name}</span></nav>
        <header className="case-intro">
          <h1>{project.name}: <em>{project.headline}</em></h1>
          <p className="project-category">{project.category}</p>
          <div className="case-intro-bottom"><p>{project.summary}</p><a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">View live product <span aria-hidden="true">↗</span></a></div>
        </header>

        <figure className="case-hero-figure">
          <img src={project.screenshot} alt={project.screenshotAlt} />
          <figcaption>Captured from the public product page. Product examples and demo data are identified below where applicable.</figcaption>
        </figure>

        <section className="case-section" aria-labelledby="overview-title">
          <div className="case-section-heading"><h2 id="overview-title">The problem, the users, and my role</h2></div>
          <div className="case-facts">
            <article><h3>Business problem</h3><p>{project.problem}</p></article>
            <article><h3>Intended users</h3><p>{project.users}</p></article>
            <article><h3>My role</h3><p>{project.role}</p></article>
          </div>
        </section>

        <section className="case-section case-architecture" aria-labelledby="architecture-title">
          <div className="case-section-heading"><h2 id="architecture-title">How the product workflow fits together</h2></div>
          <p className="case-section-intro">This view summarizes product layers and flows described in the supplied resume and public product material. It is not a private infrastructure diagram.</p>
          <Sequence items={project.architecture} label={`${project.name} product workflow`} />
          <div className="tech-stack"><h3>Technology & capabilities</h3><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="case-section" aria-labelledby="decisions-title">
          <div className="case-section-heading"><h2 id="decisions-title">Engineering decisions that make the evidence useful</h2></div>
          <EvidencePairs items={project.decisions} />
        </section>

        <section className="case-section" aria-labelledby="challenges-title">
          <div className="case-section-heading"><h2 id="challenges-title">Challenges and solutions for real operating conditions</h2></div>
          <div className="challenge-list">
            {project.challenges.map((item) => <article key={item.problem}><div><h3>Challenge</h3><p>{item.problem}</p></div><div><h3>Approach</h3><p>{item.solution}</p></div></article>)}
          </div>
        </section>

        <section className="case-section reliability-section" aria-labelledby="reliability-title">
          <div className="case-section-heading"><h2 id="reliability-title">Reliability, security, and scale</h2></div>
          <p>{project.reliability}</p>
        </section>

        <section className="case-section walkthrough-section" aria-labelledby="walkthrough-title">
          <div className="case-section-heading"><h2 id="walkthrough-title">Follow the product workflow</h2></div>
          <Sequence items={project.walkthrough.map((body, index) => ({ title: `Step ${index + 1}`, body }))} label={`${project.name} walkthrough`} />
        </section>

        <section className="case-section capability-section" aria-labelledby="capability-title">
          <div className="case-section-heading"><h2 id="capability-title">Public behavior and stated scope</h2></div>
          <div className="capability-columns">
            <article><h3>Shown or documented publicly</h3><ul>{project.publicCapabilities.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article><h3>Capabilities listed in the project brief</h3><ul>{project.briefCapabilities.map((item) => <li key={item}>{item}</li>)}</ul><p>These items come from the brief; their current deployment status has not been independently verified.</p></article>
          </div>
        </section>

        <section className="case-section status-section" aria-labelledby="status-title">
          <div className="case-section-heading"><h2 id="status-title">Current status and results</h2></div>
          <p>{project.status}</p>
          <p className="source-note">No customer counts, revenue, testimonials, or performance results are inferred from demo material.</p>
        </section>

        <section className="case-section lesson-section" aria-labelledby="lesson-title">
          <div className="case-section-heading"><h2 id="lesson-title">What this work reinforces</h2></div>
          <blockquote>{project.lesson}</blockquote>
        </section>

        <section className="case-close" aria-label="Project links">
          <Link className="text-link" to="/#work">← All projects</Link>
          <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">Visit {project.name} <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <footer className="site-footer page-shell">
        <Link className="wordmark" to="/">Kiran Kumar H<span>.</span></Link>
        <p>Senior Full Stack Developer · Bangalore, India</p>
        <Link to="/#contact">Discuss a project</Link>
        <small>© {new Date().getFullYear()} Kiran Kumar H</small>
      </footer>
    </div>
  );
}
