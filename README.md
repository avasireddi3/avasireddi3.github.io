# Personal Portfolio Website

A responsive portfolio website built with React and Tailwind CSS, designed to showcase technical projects and skills.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark mode support
- Project showcase with filtering and search functionality
- Blog section with markdown rendering
- About page with skills and career journey
- Contact page with links to social profiles

## Technologies Used

- React
- React Router
- Tailwind CSS
- Lucide React Icons
- GitHub Pages for hosting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Start the development server:
\`\`\`bash
npm start
# or
yarn start
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
\`\`\`json
"homepage": "https://yourusername.github.io/portfolio-website"
\`\`\`

2. Deploy the application:
\`\`\`bash
npm run deploy
# or
yarn deploy
\`\`\`

This will build the application and push it to the `gh-pages` branch of your repository.

## Customization

- Update the project data in `src/pages/ProjectsPage.tsx`
- Update the blog posts in `src/data/blog-posts.ts`
- Modify the about page content in `src/pages/AboutPage.tsx`
- Update contact information in `src/pages/ContactPage.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
