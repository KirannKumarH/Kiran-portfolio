# Design system

## Direction

The portfolio is an evidence-led product engineering journal. Product screenshots, workflows, and scoped engineering notes carry the story. The page borrows the restrained white, charcoal, and violet language used by the three public Ketrium Labs products while giving the portfolio its own editorial rhythm.

## Tokens

- Paper: `#f7f6f2`
- Surface: `#ffffff`
- Ink: `#1b1920`
- Muted text: `#66616e`
- Rule: `#d9d6df`
- Accent: `#6439cb`
- Deep accent: `#3d247d`
- Contact surface: `#211b2b`
- Body: DM Sans (self-hosted)
- Display emphasis: Instrument Serif (self-hosted)
- Content width: `1240px`
- Small control radius: `6px`
- Product media radius: `9px`

## Components

- Persistent, keyboard-operable site navigation with a compact mobile menu.
- Three compact flagship project cards with real product imagery; four earlier projects are available through a counted expansion control.
- Evidence-based case-study sections with explicit product workflow stages.
- Collapsible engineering experience and service rows keep their summaries visible. Experience is grouped by delivery area, without employer names or employment dates.
- A keyboard-operable category tab list presents one skill group at a time; it scrolls horizontally on mobile.
- Direct email and professional-profile links; no backendless form.

## Interaction

- Visible focus outlines and a skip-to-content link.
- Reduced-motion preference disables smooth scrolling and animated transitions.
- Links use text labels plus simple directional markers; hover only changes color or shifts a control slightly.
- Product screenshots use lazy loading after the first project and explicit descriptive alternative text.
- Project expansion state survives case-study navigation within the browser session. A lower collapse control returns focus and scroll position to the main toggle.
- Engineering experience and services use native details disclosures. The complete project list and 110 skills remain available.

## Content rules

- Distinguish public product behavior from resume-sourced implementation details.
- Mark product demo figures and walkthroughs as illustrative where the product does.
- Do not claim freelance availability, private employer architecture, customer results, or public code repositories without confirmation.

- Employment privacy: no employer identifiers in visible copy, structured metadata, or downloadable files. Ketrium Labs remains the public product-company context.
