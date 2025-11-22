# General Guidelines
- Follow the project’s **Angular version from each package’s `package.json`** (use that API surface; do not assume latest).
- Prefer **standalone components**, **signals**, and **new control flow** (`@if/@for/@switch`).
- Keep components focused, side-effect free where possible, and strongly typed.
- Use **DI via `inject()`**; services default to `providedIn: 'root'`.
- Use `NgOptimizedImage` for static images. Avoid direct DOM access.

# SOLID, Naming & Code Quality
- Apply **SOLID** principles in design and refactors.
- **Naming**:
  - Constants: `SCREAMING_SNAKE_CASE` (e.g., `DEFAULT_PAGE_SIZE`).
  - Variables & functions: `camelCase`.
  - Types, interfaces, classes: `PascalCase`.
- **No abbreviations** anywhere (avoid `cfg`, `btn`, `usr`; use full words).
- **No magic numbers/strings**: extract to named `const` values at the top of the file or a local constants module.
- **DRY**: after the **second–third** repetition, refactor to a shared function/utility.
- Prefer **small, pure functions** with explicit types and clear side-effect boundaries.

# Output Format
- Generate complete, ready-to-paste files with correct paths.
- Do not create tests: **never** generate or fill `*.spec.ts` files.
- Respect existing **folder structure**; do **not** invent new dirs or restructure files. Follow the project’s current layout.

# Project Context
- Framework: **Angular** (read the **actual version** from the relevant `package.json` and use matching APIs).
- Language: **TypeScript (strict)**; no `any` (use `unknown` and narrow).
- State: local via `signal()`, derived via `computed()`.
- Data: use **RxJS Observables** at service boundaries; templates consume with `| async` or convert to signals (`toSignal`).

# Angular Rules
- Components are **standalone**; import dependencies via `imports: [...]`.
- Use **`input<T>()`** and **`output<T>()`** instead of legacy decorators.
- Always set **`changeDetection: ChangeDetectionStrategy.OnPush`**.
- Use native control flow blocks and **class/style property bindings** (avoid `ngClass`/`ngStyle`).
- Prefer **lazy-loaded** feature routes.

# RxJS & Observable Handling
- Model async flows with **Observables**; **do not call `subscribe()`** unless a side-effect is explicitly required.
- For one value, prefer:
  - `firstValueFrom(obs$)` for the first emission, or
  - `lastValueFrom(obs$)` for the last-on-complete, or
  - `take(1)` to stay in Rx.
- Convert view-driving streams to **signals**: `toSignal(source$, { initialValue })`.
- Compose with `switchMap/concatMap/exhaustMap/mergeMap`; avoid nested subscriptions.
- Handle errors explicitly with typed `catchError`.

# Language & Tooling Rules
- Must be **ESLint-clean** and **Prettier-formatted** (do not add `eslint-disable` unless explicitly requested).
- Follow Angular’s official **style guide** and project-level lint rules.

# File Organization
- Logic in `.ts`, template in `.html`, styles in `.scss`.
- Place constants near usage or in a local `constants.ts`, within the **existing** folder structure.

# Commenting Code
- Do not add comments unless necessary, write code that is self documenting.
- none of the code needs comments. If you dont use abbreviations, and weird names. Only use proper naming conventions.
- Avoid complex logic in functions, make multiple functions that split the logic into smaller, more manageable pieces.
- Use descriptive names for variables, functions, and classes to convey their purpose clearly.
- Keep functions small and focused on a single task.
- Keep functions small and focused on a single task.