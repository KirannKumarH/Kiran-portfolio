import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { additionalFeaturedProjects, caseStudies, engineeringExperience, secondaryProjects, services, skillGroups } from '../data/caseStudies';

const EMAIL = '1999kirankumarh@gmail.com';
const GITHUB = 'https://github.com/KirannKumarH';
const LINKEDIN = 'https://www.linkedin.com/in/kiran-kumar-h-7ba210183/';

function SectionHeading({ title, text, id }) {
  return (
    <div className="section-heading" id={id}>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

const projectPreviews = {
  clicktrail: 'Monitor campaign links, protect tracking, and understand click performance.',
  citetrail: 'Track brand mentions and citations across AI assistant answers.',
  neuraleye: 'Find sponsor appearances in video, with frame-level evidence.'
};

function Chevron() {
  return <svg className="disclosure-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Reveal({ id, label, children }) {
  const [open, setOpen] = useState(() => sessionStorage.getItem(id) === 'open');
  const buttonRef = useRef(null);
  const toggle = () => {
    setOpen(!open);
    sessionStorage.setItem(id, open ? 'closed' : 'open');
  };
  const collapse = () => {
    setOpen(false);
    sessionStorage.setItem(id, 'closed');
    buttonRef.current?.focus({ preventScroll: true });
    buttonRef.current?.scrollIntoView({ block: 'center', behavior: 'auto' });
  };
  return (
    <div className="reveal-section">
      <button className="reveal-toggle" type="button" ref={buttonRef} aria-expanded={open} aria-controls={id} onClick={toggle}>
        <span>{open ? 'Show fewer projects' : label}</span><Chevron />
      </button>
      <div id={id} hidden={!open}>
        {children}
        <button className="collapse-link" type="button" onClick={collapse}>Show fewer projects</button>
      </div>
    </div>
  );
}

function ProjectRow({ project, index }) {
  return (
    <article className="project-card">
      <Link className="project-image-link" to={`/work/${project.slug}`} aria-label={`Read the ${project.name} case study`}>
        <img alt={project.screenshotAlt} className="project-image" decoding="async" loading={index === 0 ? 'eager' : 'lazy'} src={project.screenshot} />
      </Link>
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-summary">{projectPreviews[project.slug]}</p>
        <div className="project-links">
          <Link className="text-link" to={`/work/${project.slug}`}>Read case study <span aria-hidden="true">→</span></Link>
          <a className="product-link" href={project.url} target="_blank" rel="noreferrer">View live product <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}

function AdditionalFeaturedProjectRow({ project }) {
  return (
    <article className="project-card">
      <figure className="project-image-link project-illustration">
        <img alt={project.imageAlt} className="project-image" loading="lazy" src={project.image} />
        <figcaption className="image-caption">Project illustration</figcaption>
      </figure>
      <div className="project-copy">
        <h3>{project.name}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-summary">{project.summary}</p>
        <details className="project-more">
          <summary>View more project details<Chevron /></summary>
          <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          <ul className="project-stack" aria-label={`${project.name} technologies`}>
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="source-note">{project.sourceNote}</p>
        </details>
      </div>
    </article>
  );
}

function ExperienceItem({ area }) {
  return (
    <details className="experience-disclosure">
      <summary>
        <span className="experience-overview">
          <h3>{area.title}</h3>
          <span className="experience-summary">{area.summary}</span>
        </span>
        <span className="disclosure-action"><span className="when-closed">Explore the work</span><span className="when-open">Show less</span><Chevron /></span>
      </summary>
      <div className="experience-expanded">
        <ul className="achievement-list">{area.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        <ul className="technology-list" aria-label={`${area.title} technologies`}>{area.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </details>
  );
}

function ServiceItem({ service }) {
  const subject = encodeURIComponent(`Project discussion: ${service.subject}`);
  return (
    <details className="service-disclosure">
      <summary><span><h3>{service.name}</h3><span className="service-preview">{service.description}</span></span><Chevron /></summary>
      <div className="service-expanded">
        <dl className="service-details">
          <div><dt>Typical work</dt><dd>{service.deliverables}</dd></div>
          <div><dt>Tools</dt><dd>{service.tools}</dd></div>
          <div><dt>Related work</dt><dd>{service.evidence}</dd></div>
        </dl>
        <a className="text-link" href={`mailto:${EMAIL}?subject=${subject}`}>Ask about this work <span aria-hidden="true">↗</span></a>
      </div>
    </details>
  );
}

function SkillTabs() {
  const [selected, setSelected] = useState(1);
  const tabs = useRef([]);
  const onKeyDown = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % skillGroups.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + skillGroups.length) % skillGroups.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = skillGroups.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  };
  return (
    <div className="skills-browser">
      <div className="skill-tabs" role="tablist" aria-label="Engineering skill categories">
        {skillGroups.map((group, index) => (
          <button key={group.name} type="button" role="tab" id={`skill-tab-${index}`} aria-controls={`skill-panel-${index}`} aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} ref={(el) => { tabs.current[index] = el; }} onClick={() => setSelected(index)} onKeyDown={(event) => onKeyDown(event, index)}>{group.name}</button>
        ))}
      </div>
      {skillGroups.map((group, index) => (
        <div key={group.name} role="tabpanel" id={`skill-panel-${index}`} aria-labelledby={`skill-tab-${index}`} hidden={selected !== index} tabIndex={0}>
          <h3>{group.name}</h3>
          <ul className="skill-items">{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>
      ))}
    </div>
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
            <p className="hero-description">I’m Kiran Kumar H. I build enterprise systems, SaaS platforms, and AI products—from backend architecture to the frontend. 5+ years of engineering and product ownership.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Discuss a project <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="resume-link" href="#experience">Explore my experience <span aria-hidden="true">↓</span></a>
            </div>
            <div className="social-links" aria-label="Professional profiles">
              <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={`mailto:${EMAIL}`}>Email <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="work-section page-shell" id="work" aria-labelledby="work-title">
          <SectionHeading id="work-title" title="Featured projects" text="Three products I’m building at Ketrium Labs. Explore the product or go deeper into the engineering." />
          <div className="project-grid">
            {caseStudies.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
          </div>
          <Reveal id="more-projects" label={`Show ${additionalFeaturedProjects.length} more projects`}>
            <div className="project-grid archive-grid">{additionalFeaturedProjects.map((project) => <AdditionalFeaturedProjectRow key={project.name} project={project} />)}</div>
          </Reveal>
          <details className="other-work">
            <summary>More engineering work <span className="item-count">{secondaryProjects.length}</span><Chevron /></summary>
            <div className="secondary-list">
              {secondaryProjects.map((project) => (
                <article className="secondary-entry" key={project.name}>
                  <div><h3>{project.name}</h3><p>{project.type}</p></div>
                  <p className="secondary-summary">{project.summary}</p>
                  <ul className="technology-list" aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                </article>
              ))}
            </div>
          </details>
          <details className="evidence-note"><summary>About the project images and sources</summary><p className="source-note">The three Ketrium products link to their public sites; screenshots show public demo material. Other entries use the resume, brief, and repository illustrations. No public implementation repositories were verified.</p></details>
        </section>

        <section className="experience-section page-shell" id="experience" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" title="Engineering experience" text="5+ years across full-stack products, enterprise systems, and AI. Here’s the experience I bring to a project." />
          <div className="experience-list">
            {engineeringExperience.map((area) => <ExperienceItem key={area.title} area={area} />)}
          </div>
        </section>

        <section className="services-section page-shell" id="services" aria-labelledby="services-title">
          <SectionHeading id="services-title" title="How I can help" text="From a first version to a faster, more reliable platform." />
          <div className="services-list">
            {services.map((service) => <ServiceItem key={service.name} service={service} />)}
          </div>
          <div className="specialty-line"><span>Specialized capability</span><p>Computer vision and video analytics—from brand recognition to evidence you can inspect frame by frame.</p><Link className="text-link" to="/work/neuraleye">Explore NeuralEye <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="expertise-section page-shell" id="expertise" aria-labelledby="expertise-title">
          <SectionHeading id="expertise-title" title="Engineering strengths" text="Explore the stack by discipline. The full skill catalog is here when you need it." />
          <SkillTabs />
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
