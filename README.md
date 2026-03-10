# PCS — IT Solutions

A modern web application for PCS, India's trusted IT partner — built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS.

## Tech Stack

- **React 18** with TypeScript
- **Vite** — fast dev server and bundler
- **Tailwind CSS** — utility-first styling
- **shadcn-ui** — accessible component library
- **React Router** — client-side routing
- **TanStack Query** — server state management

## Getting Started

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests (Vitest) |

## Project Structure

```
src/
  components/   # Page sections and shared UI components
  pages/        # Route-level page components
  hooks/        # Custom React hooks
  lib/          # Utility functions
  assets/       # Static images and media
```

## Deployment

Build the project and deploy the `dist/` folder to any static hosting provider (Vercel, Netlify, AWS S3, etc.):

```sh
npm run build
```
