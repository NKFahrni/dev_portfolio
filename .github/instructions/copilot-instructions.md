# Copilot Instructions for Dev_Portfolio

THE FOLLOWING FILES ARE ALSO PART OF THE INSTRUCTIONS: C:\Git\private\Dev_Portfolio\.github\instructions\general-instructions..md, C:\Git\private\Dev_Portfolio\.github\instructions\llms-instructions.md

This file contains concise, actionable guidance for AI coding agents working on this Angular 21 portfolio app.

Project overview
- Big picture: a small Angular 21 SPA with optional SSR. Client entry is `src/main.ts`; server entry for SSR is `src/main.server.ts` and `src/server.ts` runs an Express server using `@angular/ssr`.
- Routes: client routes are in `src/app/app.routes.ts` (currently empty). Server rendering routes are in `src/app/app.routes.server.ts` and server config in `src/app/app.config.server.ts`.

Build / dev / test commands
- Start dev server (HMR/dev rebuilds): `npm start` (runs `ng serve`).
- Production build: `npm run build` (uses Angular build from `angular.json`).
- Watch build: `npm run watch`.
- Run unit tests: `npm test`.
- Serve SSR build (after building): `npm run serve:ssr:dev_portfolio` which runs `node dist/dev_portfolio/server/server.mjs`.

Key patterns and conventions (observable in the codebase)
- Standalone-style bootstrap: uses `bootstrapApplication` with an `ApplicationConfig` object in `src/app/app.config.ts`.
- Signals API: component state uses `signal()` (see `src/app/app.ts`). Prefer signals for local state.
- Templates: inline template files are used for components (see `src/app/app.html`). HTML uses the `@for` native control flow in templates.
- SSR: server setup uses `@angular/ssr` engine in `src/server.ts` and `src/app/app.config.server.ts`. `serverRoutes` default to prerender for `**`.
- Static assets: served from the `public/` folder (configured in `angular.json` assets).

Project-specific guidance for code changes
- When adding routes, update both `src/app/app.routes.ts` (client) and consider server prerender behavior in `src/app/app.routes.server.ts`.
- Use `ApplicationConfig` merges for server vs client config (see `mergeApplicationConfig` in `src/app/app.config.server.ts`).
- Keep components small and use `signal()` for state; search for `signal(` to follow existing patterns.
- Do not introduce global CSS frameworks without checking `src/styles.css` and `angular.json` styles array.

Integration points and external deps
- `@angular/ssr` and Express are used for server-side hosting. Changes to server responses should update `src/server.ts`.
- `public/` contains static assets; these are copied to `dist` during build.
- Devs rely on Angular CLI (`ng`) for builds — avoid bypassing the CLI unless necessary.

Examples (explicit file references)
- Add a new route: update `src/app/app.routes.ts` and add a component under `src/app/` using `bootstrapApplication` patterns.
- To debug SSR rendering issues: build with `npm run build` then run `node dist/dev_portfolio/server/server.mjs` and inspect `src/server.ts` request handling.

What not to change without review
- `angular.json` build/serve/test targets and `package.json` scripts — these are standard and breaking them affects CI and local dev flows.
- The `public/` asset mapping and server static middleware in `src/server.ts`.

If something is ambiguous
- Open `src/app/*` and `angular.json` to verify config. If adding SSR routes or APIs, run the build and `serve:ssr` locally to validate.

Feedback
- If any section is unclear or missing key details, tell me which part to expand and provide an example change you plan to make.
You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

- Do NOT use abbreviations in variable names, comments, commit messages, or documentation; always spell words out for clarity.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

- Do NOT use abbreviations in identifiers, comments, or documentation; prefer full, descriptive names for readability and maintainability.

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Prefer inline templates for small components
- Prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Use the `inject()` function instead of constructor injection


## RULES FOR THIS REPO
- YOU MUST ALWAYS USE @if AND @for IN TEMPLATES IN THIS REPO. DO NOT USE *ngIf OR *ngFor.