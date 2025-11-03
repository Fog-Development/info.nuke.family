# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for the Nuke Family, a Torn game community that provides reviving services and other utilities. The site is hosted at https://info.nuke.family and serves as comprehensive documentation for clients and staff members.

**Repository:** https://github.com/Fog-Development/info.nuke.family

## Development Commands

### Essential Commands

```bash
# Install dependencies (using yarn or npm)
yarn
# or
npm install

# Start local development server (opens browser automatically)
yarn start

# Build production-ready static files
yarn build

# Serve production build locally
yarn serve

# Clear Docusaurus cache (useful when troubleshooting)
yarn clear

# Backup userscripts from external URLs
yarn backup-userscripts
```

### Deployment

The site is automatically built via Netlify static hosting when changes are pushed to the `master` branch.

## Architecture

### Docusaurus Configuration

- **Config file:** [docusaurus.config.js](docusaurus.config.js)
- **Base URL:** `/` (docs served at root path via `routeBasePath: "/"`)
- **Sidebar:** Auto-generated from docs folder structure ([sidebars.js](sidebars.js))
- **Search:** Algolia DocSearch integration (app ID: KUKZFX8AXP)
- **Theme:** Custom CSS in [src/css/custom.css](src/css/custom.css)

### Content Organization

```
docs/
├── intro.md              # Homepage (slug: /)
├── discord-bot/          # Discord bot documentation
├── reviving/             # Reviving service guides
├── new-nuker/            # Guides for new members
├── our-family/           # Family information and banners
└── userscripts/          # Userscript documentation and backups
```

The sidebar is auto-generated from the `docs/` folder structure. Markdown files use frontmatter for configuration (position, tags, slug).

### Custom Scripts

**Userscript Backup System** ([scripts/backup-userscripts.js](scripts/backup-userscripts.js)):

- Scans [docs/userscripts/index.md](docs/userscripts/index.md) for download links
- Downloads userscripts from external URLs (e.g., GreasyFork)
- Saves backups to `docs/userscripts/userscript-backup/`
- Automatically updates markdown with backup download links
- Run via: `yarn backup-userscripts`

## Key Technical Details

### Node Version

Requires Node.js >= 18.0 (specified in package.json engines)

### External Integrations

- **Torn API:** Documentation references Torn game API integration
- **Nuke Family site:** https://nuke.family (separate service)
- **Discord:** Community server at https://discord.gg/ukq9gC4mHS

### Static Assets

- Located in `static/img/`
- Includes logos, icons, OG images, and Docusaurus defaults
- Favicon: `static/img/favicon.ico`
- Logo: `static/img/icon.svg`

### React Components

- Minimal custom components in `src/components/`
- [HomepageFeatures](src/components/HomepageFeatures/index.js) - main landing page features
- Page templates in `src/pages/`

## Documentation Content

The site documents:

- **Reviving services:** How clients request and use revive services
- **Discord bot:** Commands and contract creation workflows
- **New member guides:** Onboarding for new Nuke Family members (including Torn Medical specific guide)
- **Userscripts:** Nuke Assistant and other browser extensions
- **Family information:** Faction details and promotional materials

## Important Notes

- The project uses a "memory-bank" system (see `.clinerules`) for maintaining context across AI assistant sessions - this is specific to Cline AI tool usage
- Git branch: `master` (not `main`)
- Build errors are set to throw (`onBrokenLinks: "throw"`) to catch broken links
- Edit page links point to master branch on GitHub
