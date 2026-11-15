import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { additionalFeaturedProjects, caseStudies, experience, secondaryProjects, services, skillGroups } from '../data/caseStudies';

const EMAIL = '1999kirankumarh@gmail.com';
const GITHUB = 'https://github.com/KirannKumarH';
const LINKEDIN = 'https://www.linkedin.com/in/kiran-kumar-h-7ba210183/';
const RESUME = '/resume/Kiran-Kumar-H-Resume.pdf';

function SectionHeading({ title, text, id }) {
  return (
    <div className="section-heading" id={id}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ProjectRow({ project, index }) {
  return (
    <article className={`project-row${index % 2 ? ' project-row-reverse' : ''}`}>
      <Link className="project-image-link" to={`/work/${project.slug}`} aria-label={`Read the ${project.name} case study`}>
        <img
          alt={project.screenshotAlt}
          className="project-image"
          decoding="async"
          loading={index === 0 ? 'eager' : 'lazy'}
          src={project.screenshot}
        />
        <span className="image-caption">Public product page · demo material labelled by the product</span>
      </Link>
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-stack" aria-label={`${project.name} technologies`}>
          {project.stack.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-links">
          <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">View live product <span aria-hidden="true">↗</span></a>
          <Link className="text-link" to={`/work/${project.slug}`}>Read case study <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </article>
  );
}

function AdditionalFeaturedProjectRow({ project, index }) {
  return (
    <article className={`project-row${index % 2 ? ' project-row-reverse' : ''}`}>
      <figure className="project-image-link project-illustration">
        <img alt={project.imageAlt} className="project-image" loading="lazy" src={project.image} />
        <figcaption className="image-caption">Illustrative project image from the repository</figcaption>
      </figure>
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-stack" aria-label={`${project.name} technologies`}>
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="source-note">{project.sourceNote}</p>
        <details className="project-more">
          <summary>View more project details</summary>
          <ul>
            {project.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </details>
      </div>
    </article>
  );
}

function ExperienceItem({ job }) {
  return (
    <article className="experience-entry">
      <div className="experience-date">{job.dates}</div>
      <div className="experience-detail">
        <div className="experience-title-row">
          <div><h3>{job.title}</h3><p className="experience-company">{job.company}</p></div>
        </div>
        <p className="experience-summary">{job.summary}</p>
        <ul className="achievement-list">
          {job.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ul className="technology-list" aria-label={`${job.company} technologies`}>
          {job.technologies.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </article>
  );
}

function ServiceItem({ service }) {
  const subject = encodeURIComponent(`Project discussion: ${service.subject}`);
  return (
    <article className="service-entry">
      <div className="service-main">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <a className="text-link" href={`mailto:${EMAIL}?subject=${subject}`}>Ask about this work <span aria-hidden="true">↗</span></a>
      </div>
      <dl className="service-details">
        <div><dt>Typical work</dt><dd>{service.deliverables}</dd></div>
        <div><dt>Tools</dt><dd>{service.tools}</dd></div>
        <div><dt>Related evidence</dt><dd>{service.evidence}</dd></div>
      </dl>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main">
        <section className="hero page-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-main">
            <h1 id="hero-title">Senior Full Stack Developer building scalable <em>SaaS</em> & <em>AI</em> products.</h1>
            <p className="hero-description">I’m Kiran Kumar H, a full-stack and backend engineer with 5+ years of experience across enterprise systems and SaaS products. I work from architecture and APIs through data systems, cloud infrastructure, and modern frontend development.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Discuss a project <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="resume-link" href={RESUME} download>Download resume <span aria-hidden="true">↓</span></a>
            </div>
            <div className="social-links" aria-label="Professional profiles">
              <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={`mailto:${EMAIL}`}>Email <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Current work">
            <p>Currently</p>
            <strong>London Stock Exchange Group</strong>
            <span>Senior Software Developer</span>
            <hr />
            <strong>Ketrium Labs</strong>
            <span>Co-Founder & CTO</span>
            <div className="hero-product-links">
              {caseStudies.map((project) => <a key={project.slug} href={project.url} target="_blank" rel="noreferrer">{project.name} <span aria-hidden="true">↗</span></a>)}
            </div>
          </aside>
        </section>

        <section className="work-section page-shell" id="work" aria-labelledby="work-title">
          <SectionHeading id="work-title" title="Featured projects" text="Explore three live products and earlier enterprise, mobile, finance, and AI work. Expand a project for more detail." />
          <div className="project-list">
            {caseStudies.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
            {additionalFeaturedProjects.map((project, index) => <AdditionalFeaturedProjectRow key={project.name} project={project} index={index} />)}
          </div>
          <p className="repo-note">No public repositories were verified for these projects. The three Ketrium products link to their public sites; other entries are described from the resume, brief, and repository materials.</p>
        </section>

        <section className="secondary-section page-shell" aria-labelledby="secondary-title">
          <SectionHeading id="secondary-title" title="Additional engineering work" text="Smaller product efforts and prototypes that add context to the work above." />
          <div className="secondary-list">
            {secondaryProjects.map((project) => (
              <article className="secondary-entry" key={project.name}>
                <div><h3>{project.name}</h3><p>{project.type}</p></div>
                <p className="secondary-summary">{project.summary}</p>
                <ul className="technology-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="source-note">Secondary project summaries and technologies are based on the supplied resume; no private repositories or customer details are linked.</p>
        </section>

        <section className="services-section page-shell" id="services" aria-labelledby="services-title">
          <SectionHeading id="services-title" title="How I can help" text="A technical partner for the product decisions and engineering work between idea and reliable software." />
          <div className="services-list">
            {services.map((service) => <ServiceItem key={service.name} service={service} />)}
          </div>
          <div className="specialty-line"><span>Specialized capability</span><p>Computer vision and video analytics—from brand recognition to evidence you can inspect frame by frame.</p><Link className="text-link" to="/work/neuraleye">Explore NeuralEye <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="experience-section page-shell" id="experience" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" title="Experience with ownership" text="Enterprise delivery, early product work, and the engineering decisions that connect the two." />
          <div className="experience-list">
            {experience.map((job) => <ExperienceItem key={`${job.company}-${job.title}`} job={job} />)}
          </div>
          <p className="source-note">Selected outcomes and percentages are taken from the supplied resume. Employer-specific platform names and customer information are omitted.</p>
        </section>

        <section className="expertise-section page-shell" id="expertise" aria-labelledby="expertise-title">
          <SectionHeading id="expertise-title" title="Engineering strengths" text="The full 110-skill catalog, grouped into 10 areas—from frontend and APIs to cloud, AI, mobile, testing, and delivery." />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.name}>
                <h3>{group.name}</h3>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="education-line"><span>Education</span><p>B.E. Computer Science & Engineering · MVJ College of Engineering</p><span>2017 — 2021</span></div>
        </section>

        <section className="contact-section page-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div>
              <h2 id="contact-title">Have a product or engineering challenge in mind?</h2>
              <p>Tell me what you’re trying to build or improve. We can start with the problem and work out the right next step.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Project discussion')}`}>Discuss a project <span aria-hidden="true">↗</span></a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <div><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer page-shell">
        <Link className="wordmark" to="/">Kiran Kumar H<span>.</span></Link>
        <p>Senior Full Stack Developer · Bangalore, India</p>
        <a href="#home">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Kiran Kumar H</small>
      </footer>
    </div>
  );
}
