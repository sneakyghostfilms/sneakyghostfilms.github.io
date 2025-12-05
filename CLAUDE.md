# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the static website for Sneaky Ghost Films (sneakyghost.com), an independent film production company. The site is hosted on GitHub Pages and showcases a portfolio of 14 independent films.

## Key Commands

### Local Development
```bash
npm install        # Install dependencies (first time)
npm run dev        # Start Astro dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

### Asset Generation
```bash
# Generate WebP and thumbnail variants for images
python make_sgf_assets.py
```

### Deployment
```bash
# Deploy to GitHub Pages (automatic on push to master branch)
git push origin master
```
GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the Astro site and deploys to GitHub Pages.

## Architecture and Structure

### Technology Stack
- **Astro** - Static site generator with component-based architecture
- **TypeScript** - Type-safe data and components
- **CSS Grid** - Portfolio grid layout (replaced Isotope.js)
- **Formspree** - Contact form handling
- **Google Maps API** - Contact section map

### File Organization
```
/
├── src/
│   ├── components/          # Astro components
│   │   ├── Header.astro     # Navigation header
│   │   ├── Footer.astro     # Site footer
│   │   ├── HeroSlider.astro # Homepage hero with ghostly title effect
│   │   ├── FilmCard.astro   # Portfolio grid item
│   │   └── CastMember.astro # Cast member display
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout with SEO, security headers
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── films/
│   │       └── [slug].astro # Dynamic film detail pages
│   └── data/
│       └── films.ts         # All film data (titles, cast, videos, etc.)
├── public/
│   └── files/               # Static assets (images, videos, CSS, fonts)
│       ├── css/             # Legacy stylesheets (style.css, etc.)
│       ├── uploads/         # Images organized by type
│       │   ├── films/       # Film poster images
│       │   └── cast/        # Cast headshots by film
│       └── ...
├── astro.config.mjs         # Astro configuration
└── package.json
```

### Key Components

**HeroSlider.astro** - Homepage hero section with:
- Background video with overlay
- "Sneaky Ghost Films" title with SVG turbulence filter effect
- Rotating taglines
- Cat logo in corner

**FilmCard.astro** - Portfolio grid cards linking to film detail pages

**Layout.astro** - Base layout with:
- SEO meta tags and Open Graph
- Security headers (CSP, X-Frame-Options)
- JSON-LD structured data
- Google Fonts (Montserrat, Lato, Cormorant Garamond)

### Adding New Films
1. Add film data to `src/data/films.ts` following the `Film` interface
2. Add film images to `public/files/uploads/films/` (800x600 for grid, 1690x1100 for hero)
3. Add cast photos to `public/files/uploads/cast/[film-slug]/`
4. Run `python make_sgf_assets.py` to generate WebP variants
5. The film page is auto-generated from the data

### Important Notes

**SVG Filters & WebKit**: The ghostly mist effect uses an SVG `feTurbulence` filter. To avoid centering issues in Safari/WebKit:
- Use `primitiveUnits="userSpaceOnUse"` on the filter
- Avoid extended bounds (`x="-20%"` etc.) that cause layout miscalculation

**Responsive Breakpoints**: Key breakpoints in use:
- 1200px: About section stacks vertically
- 1024px: Portfolio grid goes to 2 columns
- 768px: Hero title font size changes
- 640px: Portfolio grid goes to 1 column, mobile styles
- 400px: Hero title hidden on very small screens

**Legacy CSS**: The site still uses `public/files/css/style.css` from the original design. Component-specific styles use `<style>` blocks in Astro components. Use `!important` when overriding legacy styles.

**GitHub Pages**: Deploys via `peaceiris/actions-gh-pages` to `gh-pages` branch. Source should be set to "Deploy from a branch" > `gh-pages`.
