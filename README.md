# CPU College of Computer Studies — CCS 3031 redesign

A Vue 3 + Vue Router academic website. CPU's college content and identity remain the subject. This is a student concept, not the university's official site.

## Run locally

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Vite. Do not open index.html directly as a file.

```sh
npm test
npm run build
npm run preview
```

Build output is in `dist/`. Hash-based Vue Router URLs work on static hosting without redirect rules. Upload `dist/` to a static host for a public class submission. A private Sites deployment requires access changes before instructors can view it.

## Pages and architecture

- `/`: Home
- `/about`: mission, vision, purpose, history
- `/programs`: program overview
- `/programs/bsit`, `/programs/bscs`, `/programs/bsdmia`, `/programs/blis`: distinct full program routes
- `/faculty`: directory grouped by program, text search, filters, and empty/reset states
- `/news`: archived stories, categories, search, and story detail via query parameter
- `/contact`: contact information, directions, and validated demo inquiry
- Unknown routes: helpful 404 page

`src/components/` contains shared navigation, footer, program cards, faculty cards, news cards, and page introductions. `src/views/` contains route views. `src/data/` separates verified source material, display copy, and validation. `src/styles.css` holds tokens, layouts, components, and responsive rules. The program routes share a reusable view with distinct content, colors, and visuals.

## Features to demonstrate

1. Open Programs and visit all four program pages; use the in-page section navigation.
2. Open Our People; select BLIS, search a name, try no matching text, and reset.
3. Open News & Events; filter Alumni and open a story. Dates remain historical.
4. Submit the contact form empty to see per-field errors, then enter valid demo values.
5. Resize to a phone width; open the mobile menu and navigate.
6. Explain reactive refs, computed filters, props, loops, conditional rendering, binding, events, and RouterLink.

## Content accuracy and limits

Official sources are recorded in `docs/REFERENCES.md`, `src/data/research.json`, and `ASSET_SOURCES.json`.

- The published faculty roster is legacy. Roles and associations are reproduced with a visible qualification, not asserted to be current. Subject specializations were not available and are omitted.
- BSDMIA and BLIS have verified coordinators; no extra teaching assignments were invented.
- Program material summarizes published outcomes and topic areas, not a verified current course checklist. The source contains copied BLIS labels that were deliberately excluded.
- Career paths are educational guidance, not employment/placement promises.
- News is archived from 2021 and labeled on every card; no upcoming events were invented.
- The inquiry form is a frontend demonstration. It does not send, save, or claim to deliver messages. Email, phone, map, and official-source links are functional external links.
- Fonts are fetched from Google Fonts, with system fallbacks. Other image assets are local.
