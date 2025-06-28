# Tech Context

## Technologies Used

- **Docusaurus:** A modern static website generator by Facebook.
- **React:** A JavaScript library for building user interfaces.
- **Markdown:** A lightweight markup language for creating formatted text.
- **Node.js:** A JavaScript runtime environment used for building and running the Docusaurus site.
- **Netlify:** A cloud hosting platform for modern web projects.

## Development Setup

1.  **Prerequisites:** Node.js and npm (or yarn) must be installed.
2.  **Installation:** Clone the repository and run `npm install` (or `yarn install`) to install the project dependencies.
3.  **Running Locally:** Use `npm start` (or `yarn start`) to run the development server. The site will be available at `http://localhost:3000`.

## Technical Constraints

- As a static site, there is no server-side code execution or database. All content is pre-built and served as static files.
- The project relies on the Docusaurus framework, so any customizations must be compatible with its architecture.

## Dependencies

- Project dependencies are managed in the `package.json` file.
- Key dependencies include `docusaurus`, `react`, and `react-dom`.

## Tool Usage Patterns

- **Content Creation:** New pages are created by adding Markdown files to the `/docs` directory.
- **Customization:** The site's appearance and layout can be customized by modifying the React components in the `/src` directory and the CSS files in `/src/css`.
- **Deployment:** Pushing changes to the `master` branch on GitHub automatically triggers a deployment on Netlify.
