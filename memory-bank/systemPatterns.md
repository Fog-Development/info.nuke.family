# System Patterns

## Architecture

This project follows a static site generation pattern. The core architecture is built around Docusaurus, a static site generator that uses React for building the user interface and Markdown for content creation.

## Key Technical Decisions

- **Static Site Generation:** Docusaurus was chosen to create a fast, secure, and easily maintainable website. Since the content is primarily informational and does not require dynamic server-side processing, a static site is the most efficient solution.
- **Markdown for Content:** All documentation and informational content are written in Markdown. This simplifies the content creation process, allowing non-technical users to contribute easily.
- **Continuous Deployment:** The site is hosted on Netlify and configured for continuous deployment. Any commit to the `master` branch automatically triggers a new build and deployment, ensuring that the live site is always up-to-date with the latest changes.

## Component Relationships

- **Docusaurus:** The core framework that structures the site, manages routing, and renders the final HTML.
- **Markdown Files:** The source of truth for all content on the site. These are located in the `/docs` directory.
- **React Components:** Used for creating interactive and custom UI elements within the Docusaurus framework.
- **Netlify:** The hosting platform that builds and serves the static site. It is connected to the project's Git repository for automated deployments.
