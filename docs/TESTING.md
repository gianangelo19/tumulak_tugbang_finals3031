# Verification record — 24 October 2026

- Production Vite build: passed.
- Three Node tests for required fields, malformed input, and a valid inquiry: passed.
- Browser: homepage → Programs → BSIT; required overview, study, careers, and faculty sections present.
- Other program routes, About, news detail, and unknown-route fallback: correct headings, no page-level horizontal overflow at desktop width, no broken loaded images observed.
- Faculty: BLIS filter returns Ana Mae B. Cantel; no-match search displays empty state; reset restores 17 unique people.
- Contact: empty submission produces four field errors; valid submission shows explicit no-send/no-storage success feedback.
- News: Alumni filter returns the Kation graduate story; archived story detail renders.
- Responsive: visually reviewed homepage/program overview at 390 px; program detail at 768 px; contact at 390 px; program overview at 320 px.
- Measured no horizontal document overflow for 768 px program detail, 390 px contact and 320 px program overview.
- Mobile navigation opens, routes to Programs, and closes after navigation.

Limitations: browser checks use responsive iframe viewports in the desktop browser, not physical devices or a full cross-browser/accessibility audit. External email/telephone links were inspected, not used to contact anyone. Verify current academic information with CCS before submission. No backend or real form delivery is implemented.
