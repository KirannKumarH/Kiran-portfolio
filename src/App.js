import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import { caseStudies } from './data/caseStudies';
import './App.css';

const SITE_URL = 'https://kirankumarh-portfolio.vercel.app';

function PageMetadata() {
  const location = useLocation();
  useEffect(() => {
    const caseStudy = caseStudies.find((project) => `/work/${project.slug}` === location.pathname);
    const title = caseStudy
      ? `${caseStudy.name} — Engineering Case Study | Kiran Kumar H`
      : 'Kiran Kumar H — Senior Full Stack Developer, SaaS & AI';
    const description = caseStudy
      ? caseStudy.metaDescription
      : 'Senior software engineer building SaaS and AI products. Explore Kiran Kumar H’s work across enterprise software, backend systems, and product engineering.';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${location.pathname}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}${location.pathname}`);
  }, [location.pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="not-found page-shell">
      <p className="section-label">404 · Page not found</p>
      <h1>That page isn’t here.</h1>
      <Link className="text-link" to="/">Return to the portfolio <span aria-hidden="true">↗</span></Link>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PageMetadata />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {caseStudies.map((project) => (
          <Route key={project.slug} path={`/work/${project.slug}`} element={<CaseStudyPage project={project} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
