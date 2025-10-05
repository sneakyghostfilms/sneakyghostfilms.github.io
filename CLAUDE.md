# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the static website for Sneaky Ghost Films (sneakyghost.com), an independent film production company. The site is hosted on GitHub Pages and showcases a portfolio of 14 independent films.

## Key Commands

### Asset Generation
```bash
# Generate WebP and thumbnail variants for images
python make_sgf_assets.py
```

### Local Development
```bash
# Serve the site locally (use any static server)
python -m http.server 8000
# Or use any other static server like live-server, http-server, etc.
```

### Deployment
```bash
# Deploy to GitHub Pages (automatic on push to master branch)
git push origin master
```

## Architecture and Structure

### Technology Stack
- **Static HTML5/CSS3/JavaScript** - No build process or framework
- **jQuery 1.9.1** - Primary JavaScript library
- **Revolution Slider** - Homepage transitions
- **Isotope.js** - Portfolio grid filtering
- **Formspree** - Contact form handling

### File Organization
```
/
├── index.html                 # Main homepage with portfolio grid
├── project-*.html            # Individual film pages (14 total)
├── 20plots.html             # Separate landing page
├── warriors/                # "Films for Heroes" section
└── files/
    ├── css/                 # All stylesheets
    ├── js/                  # JavaScript files
    └── uploads/             # Images, videos, favicons
        └── [film-name]/     # Assets organized by film
```

### Adding New Films
1. Create `project-[filmname].html` from existing film page template
2. Add film assets to `files/uploads/[filmname]/`
3. Update portfolio grid in `index.html` with new isotope-item
4. Run `python make_sgf_assets.py` to generate optimized variants
5. Update category filters if adding new genre

### Image Optimization
The `make_sgf_assets.py` script automatically:
- Generates WebP variants for better performance
- Creates 400w thumbnail versions
- Maintains JPEG fallbacks for compatibility
- Safe to re-run (skips existing files)

### Key Patterns
- **No build process** - Direct HTML/CSS/JS editing
- **Manual content updates** - Edit HTML files directly
- **Image naming convention**: `[film-name]-[descriptor].[ext]`
- **Responsive images**: Use both WebP and JPEG with `<picture>` elements
- **Lazy loading**: Applied to portfolio grid images