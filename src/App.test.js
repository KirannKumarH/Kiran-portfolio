import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  sessionStorage.clear();
  window.history.replaceState({}, '', '/');
});

test('home page explains Kiran’s focus and links to all three live products', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: /Senior Full Stack Developer building scalable SaaS & AI products/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Featured projects' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'MatterFunds' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Show 4 more projects' }));
  expect(screen.getByRole('heading', { name: 'MatterFunds' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Seronic Hub 360' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Intelligent Database Analyzer Chatbot' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Enterprise Portfolio Management System' })).toBeInTheDocument();
  const expandProject = screen.getAllByText('View more project details', { selector: 'summary' })[0];
  expect(expandProject.closest('details')).not.toHaveAttribute('open');
  fireEvent.click(expandProject);
  expect(expandProject.closest('details')).toHaveAttribute('open');
  expect(screen.getByText(/Financial pro forma workflows for structured statements/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Explore my experience/i })).toHaveAttribute('href', '#experience');
  expect(screen.getAllByRole('link', { name: /GitHub/i }).every((link) => link.getAttribute('href') === 'https://github.com/KirannKumarH')).toBe(true);
  expect(screen.getAllByRole('link', { name: /LinkedIn/i }).every((link) => link.getAttribute('href') === 'https://www.linkedin.com/in/kiran-kumar-h-7ba210183/')).toBe(true);

  const liveProductLinks = screen.getAllByRole('link', { name: /View live product/i });
  expect(liveProductLinks.map((link) => link.getAttribute('href'))).toEqual([
    'https://clicktrail.cloud/',
    'https://citetrail.cloud/',
    'https://neuraleye.cloud/'
  ]);
});

test('project case-study links open a detailed route with evidence boundaries', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: /Read the CiteTrail case study/i }));

  expect(screen.getByRole('heading', { level: 1, name: /CiteTrail: See who AI cites when buyers ask/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /How the product workflow fits together/i })).toBeInTheDocument();
  expect(screen.getByText(/underlying deployment, queue, storage, and security architecture is not publicly documented/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /View live product/i })).toHaveAttribute('href', 'https://citetrail.cloud/');
});

test('mobile navigation opens, exposes links, and closes accessibly on Escape', () => {
  render(<App />);
  const openButton = screen.getByRole('button', { name: 'Open navigation menu' });
  fireEvent.click(openButton);

  expect(openButton).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
  fireEvent.keyDown(window, { key: 'Escape' });

  expect(openButton).toHaveAttribute('aria-expanded', 'false');
  expect(openButton).toHaveFocus();
});


test('project previews expand and collapse without removing the flagship links', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Show 4 more projects' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(screen.getByRole('heading', { name: 'Enterprise Portfolio Management System' })).toBeInTheDocument();
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByRole('heading', { name: 'Enterprise Portfolio Management System' })).not.toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /View live product/i })).toHaveLength(3);
});

test('skill categories support mouse and keyboard selection while keeping one panel visible', () => {
  render(<App />);
  expect(screen.getByRole('tabpanel', { name: 'Backend & APIs' })).toBeVisible();
  fireEvent.click(screen.getByRole('tab', { name: 'AI, ML & analytics' }));
  expect(screen.getByRole('tabpanel', { name: 'AI, ML & analytics' })).toBeVisible();
  expect(screen.getAllByRole('tabpanel')).toHaveLength(1);
  fireEvent.keyDown(screen.getByRole('tab', { name: 'AI, ML & analytics' }), { key: 'ArrowRight' });
  expect(screen.getByRole('tab', { name: 'Testing' })).toHaveFocus();
  expect(screen.getByRole('tabpanel', { name: 'Testing' })).toBeVisible();
});


test('experience describes project capabilities without publishing employment history', () => {
  render(<App />);
  const experience = document.getElementById('experience');
  expect(experience).toHaveTextContent('End-to-end product delivery');
  expect(experience).toHaveTextContent('Backend performance & reliability');
  expect(document.body).not.toHaveTextContent(/London Stock Exchange Group|CSGI|Cognizant/);
  expect(screen.queryByRole('link', { name: /Download resume/i })).not.toBeInTheDocument();
  expect(experience).not.toHaveTextContent('Selected outcomes and percentages');
});
