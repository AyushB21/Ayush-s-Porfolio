# 🏎️ AB Motorsport — Ayush Bhatt's F1-themed Portfolio

An interactive, Formula 1-inspired personal portfolio built with **Vite + React**. It opens with a
lap-timer loading screen, a parked race car that drives off the line as you scroll, and race-weekend
sections: **Garage** (projects), **Telemetry** (skills), **Race Calendar** (experience),
**Academy** (education), **Podium** (achievements) and the **Pit Wall** (contact).

> Original, "inspired-by" branding only — no official F1, team, or circuit trademarks. Team name,
> livery and number are invented (AB Motorsport · #6).

## Features
- Lap-completing **loading screen** and start-lights launch.
- Hero car **drives off on scroll** (spinning wheels, exhaust streaks, motion blur).
- **Clickable glassmorphism popups** for projects & experience.
- **Tyre-stint skills** that spin and churn out throttle-bar proficiencies.
- **DRS toggle** for day (light) / night (dark) race modes, saved to `localStorage`.
- Sector **mini-map** progress, **speed-lines** on fast scroll, and a **press-P pit-stop** easter egg.
- Fully **keyboard-accessible**, semantic HTML, visible focus states, and a complete
  `prefers-reduced-motion` fallback (no heavy motion).
- **SEO**: title, description, Open Graph/Twitter tags, custom social image, `robots.txt`, `sitemap.xml`.

## Edit your content
Everything lives in **`src/data/profile.js`** — driver info, links, projects, skills, experience,
education, achievements. No component edits needed for a content update.

Your **résumé**: drop `resume.pdf` into `public/` (see `public/resume-README.txt`). The Pit Wall's
"Download Driver Card" button links to `/resume.pdf`.

Your **GitHub projects**: `npm run fetch:repos` (also runs automatically on `prebuild`) fetches your
public repos from `https://api.github.com/users/AyushB21/repos` and caches them to
`src/data/repos.json`, so the live page never calls the API. Projects listed in `profile.js` are
enriched with stars/description/links when the repo name matches.

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # runs fetch:repos, then builds to dist/
npm run preview    # preview the production build
```

## Deploy

### Vercel (recommended)
1. Push this repo to GitHub.
2. In Vercel, **Import Project** → it auto-detects Vite (`vercel.json` is included).
3. Deploy. Update the `og:url` / canonical / sitemap URLs in `index.html`, `public/sitemap.xml`
   and `public/robots.txt` to your final domain.

### GitHub Pages (alternative)
1. Push to `main`. The included workflow `.github/workflows/deploy.yml` builds and deploys.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. For a **project page** (`https://<user>.github.io/portfolio/`), the workflow sets
   `DEPLOY_TARGET=gh-pages` so Vite uses `base: '/portfolio/'`. Rename the base in `vite.config.js`
   if your repo isn't called `portfolio`. For a **user/root page** or custom domain, no base change
   is needed.

## Tech
Vite · React 18 · plain CSS with design tokens (light/dark) · SVG graphics · IntersectionObserver +
`requestAnimationFrame` for animation (no heavy runtime deps, targets 60fps).

> Upgrade path: the hero `HeroCar` is an SVG. It can be swapped for a procedural
> `react-three-fiber` 3D car later without touching the rest of the layout.
