# Portfolio audit

Audit date: 2026-11-15

## Priority findings before the redesign

1. **Credibility and focus:** The live and source versions positioned the portfolio with a generic animated hero and a very large skills catalog. The product and employment story was difficult to scan, and some employment dates were stale.
2. **Broken or unsupported actions:** The contact form was commented out, the resume link did not point to a working download, and project links referred to repositories that were not publicly available. The live homepage also used generic title and social metadata.
3. **Project evidence:** ClickTrail, CiteTrail, and NeuralEye did not have individual engineering narratives or captured public product imagery. Existing project branding included the retired TrackLink HQ name.
4. **Content accuracy:** Public product pages show feature descriptions and illustrative/demo material. They do not verify private implementation architecture, customer outcomes, usage numbers, or every feature listed in the supplied brief. Experience is grouped by engineering capability; employer names, employment dates, internal systems, and customer details are omitted.
5. **Access and responsive use:** Existing navigation, interactions, and section layouts needed a coherent keyboard, focus, reduced-motion, mobile, and case-study review. The old homepage did not provide a focused case-study route for technical evaluation.

## Revised information architecture

- **Home:** positioning, current work, flagship products, secondary work, services, employment, focused skills, contact.
- **Featured projects:** the homepage includes the three current flagship products plus MatterFunds, Seronic Hub 360, the database analyzer proof of concept, and Enterprise Portfolio Management System. Three flagship cards appear initially; a counted control reveals four earlier projects, each with expandable details. Two smaller efforts sit in a separate disclosure. Historical illustrations are identified and sample financial figures are not presented as results.
- **Case studies:** `/work/clicktrail`, `/work/citetrail`, and `/work/neuraleye`, each with product context, intended users, role, public workflow, engineering decisions grounded in available evidence, stack, constraints, current status, and next links.
- **Employment privacy:** no company-by-company timeline or public resume download. Resume files are held outside the site repository.

## Evidence and scope

- Public product pages provide the product descriptions and screenshots; example metrics or walkthrough results are labeled illustrative when the product labels them that way.
- Resume-sourced experience is consolidated into product delivery, backend reliability, and modernization; company associations and dates are omitted.
- No public repository link was verified for the three flagship products. No form submission backend exists, so contact links use direct email rather than pretending a form can deliver.
- Neutral project-inquiry language is used; the portfolio does not claim current freelance availability.

## Design decisions

The redesign uses an editorial paper-and-violet visual system, self-hosted fonts, real screenshots of the public products, compact evidence-focused case studies, direct CTAs, and a smaller grouped skills list. Motion is restrained and reduced-motion preferences are respected. The homepage uses compact visual project previews, collapsible work-history and service summaries, and skill-category tabs to reduce scrolling while retaining the complete content. It serves project prospects and hiring teams without inventing customer or company claims.
