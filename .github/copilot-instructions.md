# Copilot Instructions

## Project Purpose
Event registration website for RT EuroMeeting 2026. Single-page application with fullscreen sections and smooth scrolling navigation.

## Tech Stack
- **Framework**: SolidJS 1.9+ with TypeScript (strict mode)
- **Build Tool**: Vite 7+ with native Tailwind CSS v4 integration
- **Styling**: Tailwind CSS v4 (using `@import 'tailwindcss'` in CSS, not @tailwind directives)
- **Dev Tools**: solid-devtools enabled in development

## Architecture
Single-page layout with distinct sections:
1. **Hero Section**: Fullscreen title/intro with `Flag_min.png` background, event details, navigation buttons to other sections
2. **Itinerary Section**: Event schedule and timeline
3. **Registration Form Section**: User registration form
4. **Contact Section**: Contact information and inquiries

## Project Structure
- Entry point: `index.html` → `src/index.tsx` → `src/App.tsx`
- Single root component pattern: `render(() => <App />, root!)`
- Assets: Static images in `assets/` (Flag_min.png, Regular_min.png)

## SolidJS Patterns
- Use `Component` type from `solid-js`: `const App: Component = () => { ... }`
- JSX uses `class` not `className` (SolidJS convention)
- Import devtools with `import 'solid-devtools'` in development entry point
- Refresh reload enabled: `/* @refresh reload */` comment in index.tsx

## Styling with Tailwind v4
- Import in CSS: `@import 'tailwindcss'` (v4 syntax, not @tailwind directives)
- Vite plugin integration: Uses `@tailwindcss/vite` plugin
- Apply utility classes directly with `class` prop

## Development Workflow
- **Start dev server**: `pnpm dev` or `pnpm start` (runs on port 3000)
- **Build**: `pnpm build` (outputs to `dist/`)
- **Preview**: `pnpm serve`
- **Package manager**: Uses pnpm (pnpm-lock.yaml present)

## TypeScript Configuration
- JSX mode: `preserve` with `jsxImportSource: "solid-js"`
- Module resolution: `bundler` (Vite-optimized)
- No emit: TypeScript for type-checking only (Vite handles compilation)
- Target: ESNext for modern browsers

## Key Files
- [vite.config.ts](../vite.config.ts): Plugin order matters: devtools → solid → tailwindcss
- [tsconfig.json](../tsconfig.json): Strict mode enabled, bundler resolution
- [src/index.tsx](../src/index.tsx): Dev environment check before render
- [src/index.css](../src/index.css): Single Tailwind import

## Conventions
- Components use arrow functions with typed `Component` interface
- Error handling in dev: Throws explicit errors if root element missing
- Build target: esnext (no legacy browser support)
- Image paths: Reference assets via `/assets/filename.ext` (served by Vite)
- Section navigation: Use anchor links with smooth scroll behavior
