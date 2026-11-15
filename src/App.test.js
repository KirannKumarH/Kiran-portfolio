import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('home page explains Kiran’s focus and links to all three live products', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: /Senior Full Stack Developer building scalable SaaS & AI products/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Featured projects' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'MatterFunds' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Seronic Hub 360' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Intelligent Database Analyzer Chatbot' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Enterprise Portfolio Management System' })).toBeInTheDocument();
  const expandProject = screen.getAllByText('View more project details', { selector: 'summary' })[0];
  expect(expandProject.closest('details')).not.toHaveAttribute('open');
  fireEvent.click(expandProject);
  expect(expandProject.closest('details')).toHaveAttribute('open');
  expect(screen.getByText(/Financial pro forma workflows for structured statements/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Download resume/i })).toHaveAttribute('href', '/resume/Kiran-Kumar-H-Resume.pdf');
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
