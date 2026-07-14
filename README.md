# lorsam

React + TypeScript + Tailwind CSS v4, built with Vite, deployed to Cloudflare Pages.

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — dev server & build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — via `@tailwindcss/vite` plugin
- [ESLint](https://eslint.org/) with `typescript-eslint`
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) — Cloudflare Pages deploy

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm (comes with Node)

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the Vite dev server (default `http://localhost:5173`) with hot module reload.

## Scripts

| Command           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Start local dev server with HMR                             |
| `npm run build`   | Type-check (`tsc -b`) and build for production into `dist/` |
| `npm run preview` | Serve the production build locally                          |
| `npm run lint`    | Run ESLint over the project                                 |
| `npm run deploy`  | Build and deploy `dist/` to Cloudflare Pages via Wrangler   |

## Project structure

```
├── public/            # static assets served as-is (also holds _redirects for SPA routing)
├── src/
│   ├── assets/         # images/icons imported by components
│   ├── App.tsx          # root component
│   ├── main.tsx         # React entry point
│   ├── index.css         # global styles + Tailwind import
│   └── vite-env.d.ts       # Vite/TS ambient types
├── index.html          # HTML entry point
├── vite.config.ts       # Vite config (React + Tailwind plugins)
├── tsconfig.json         # TS project references
├── tsconfig.app.json       # TS config for app source (src/)
├── tsconfig.node.json       # TS config for Vite config itself
├── eslint.config.js        # ESLint flat config
└── wrangler.jsonc          # Cloudflare Pages config
```

## Styling

Tailwind CSS v4 is wired through the `@tailwindcss/vite` plugin (no `postcss.config.js` needed). Utility classes are available everywhere once `@import "tailwindcss";` (already present in `src/index.css`) is loaded. Custom CSS variables/theme tokens also live in `src/index.css`.

## Deployment (Cloudflare Pages)

### Option A — CLI deploy

```bash
npx wrangler login   # one-time auth
npm run deploy
```

This builds the app and runs `wrangler pages deploy dist`, publishing under the project name defined in `wrangler.jsonc`.

### Option B — Git integration (Cloudflare dashboard)

1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Set:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Every push to the connected branch triggers an automatic build & deploy.

`public/_redirects` (`/* /index.html 200`) is included so client-side routing (if added later, e.g. React Router) works correctly on Cloudflare Pages.

## Type checking

TypeScript project references split app code (`tsconfig.app.json`) from build tooling config (`tsconfig.node.json`). `npm run build` always type-checks before bundling; run `tsc -b` directly for a standalone type check without building.
