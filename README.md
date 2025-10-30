# MyPortfolio — Personal Portfolio

A clean, responsive personal portfolio built with React, Vite and Tailwind CSS — featuring 3D canvas scenes, smooth animations, and an integrated contact form.

This repository contains the source for a developer portfolio showcasing projects, experience, and contact information.

## Highlights

- Lightweight and fast development with Vite
- Built with React (18) and Tailwind CSS for rapid styling
- 3D scenes and visuals powered by Three.js and @react-three/fiber
- Smooth UI interactions using Framer Motion
- Email-enabled contact form via EmailJS

## Demo

Live demo: (add your hosted URL here)

Screenshot: (add an illustrative screenshot in `public/` and link it here)

## Features

- Responsive layout optimized for desktop and mobile
- Animated hero and section transitions
- 3D canvas components (Earth, Computers, Stars, Ball)
- Timeline of experience and featured works
- Contact form with EmailJS integration and toast notifications

## Tech stack

- React 18
- Vite
- Tailwind CSS & PostCSS
- Three.js, @react-three/fiber, @react-three/drei
- Framer Motion
- EmailJS for client-side email
- ESLint for code quality

You can find exact dependencies in `package.json`.

## Quick start

Prerequisites: Node.js (recommended v18+) and npm or pnpm.

1. Clone the repo

```powershell
git clone https://github.com/Kalebtes2031/MyPortfolio.git
cd myportfolio
```

2. Install dependencies

```powershell
npm install
```

3. Run the dev server

```powershell
npm run dev
```

Open http://localhost:5173 (or the address shown in the terminal).

## Available scripts

All scripts are declared in `package.json`:

- `npm run dev` — start development server with HMR (Vite)
- `npm run build` — build production assets
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the project

## Project structure

Top-level source layout (key files/folders):

- `index.html` — app entry HTML
- `src/` — React source code
	- `main.jsx` — app bootstrap
	- `App.jsx` — root component
	- `components/` — UI and canvas components (Hero, Navbar, About, Works, Experience, Contact, canvas/*)
	- `assets/` — images and icons
- `public/` — static assets (textures, images)
- `package.json` — scripts and dependencies

Adjust paths and names as needed for your fork.

## Deploying

Build for production and deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, etc.). Example:

```powershell
npm run build
# then deploy the generated `dist` folder with your preferred service
```

Vercel and Netlify both have simple integrations for Vite apps — connect your repository and set the build command to `npm run build` and publish directory to `dist`.

## Environment & Secrets

- EmailJS: the contact form uses EmailJS client keys. Keep your service ID, template ID and public key out of source control. Use environment variables or a small backend proxy if you need stronger security.

Example (store in a safe place or injection at build time):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access them in the app as `import.meta.env.VITE_EMAILJS_SERVICE_ID`, etc.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make changes and add tests if applicable
4. Run `npm run lint` and verify the app runs
5. Create a pull request with a clear description of your changes

Please keep changes small and focused. For larger work, open an issue first so we can discuss scope.

## Author / Contact

- Name: Kaleb Tesfaye Ayele
- Email: kalebtesfaye2031@gmail.com
- Portfolio: (link to hosted site)

---
