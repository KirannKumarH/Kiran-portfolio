# Kiran Kumar H — portfolio

A React portfolio for product engineering work, enterprise experience, and project inquiries.

## Run locally

```bash
npm install --legacy-peer-deps
npm start
```

Create a production build with `npm run build`. The app uses Create React App, React Router, and a small set of locally authored page components and styles.

## Pages

- `/` — portfolio, featured products and projects, services, experience, skills, and contact.
- `/work/clicktrail` — ClickTrail engineering case study.
- `/work/citetrail` — CiteTrail engineering case study.
- `/work/neuraleye` — NeuralEye engineering case study.

Case-study content and featured project summaries are maintained in `src/data/caseStudies.js`. Product screenshots under `public/project-screenshots/` are captures of the public product pages; they do not represent logged-in customer accounts. Historical project illustrations under `public/project-illustrations/` are labeled as portfolio illustrations, not public product screenshots. Employment resumes are kept outside the site repository. Do not add resume downloads or employer identifiers to the public portfolio.

Contact uses a direct `mailto:` link. No form backend is configured.
