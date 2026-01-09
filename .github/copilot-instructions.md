<!-- Copilot / AI agent instructions for the gh-backend project -->

# Quick Context

- Purpose: a minimal TypeScript + Express backend used for the GH test project. See [README.md](README.md).
- Entrypoints: the running Express app is defined in [src/app.ts](src/app.ts). [src/server.ts](src/server.ts) is currently empty.
- Configuration: environment-driven via [src/config/config.ts](src/config/config.ts) which loads `.env` using `dotenv` and exposes `port` and `nodeEnv`.

# Big Picture Architecture

- Very small single-process HTTP service. The app file defines routes directly on an Express `app` instance ([src/app.ts](src/app.ts)).
- No database or external APIs detected in repository files — no integration code or clients are present.
- Dev tooling indicated by `devDependencies` in [package.json](package.json): `ts-node`, `nodemon`, `eslint`, `prettier` — project is TypeScript-first and expected to be run with node tooling that supports TS at runtime.

# Developer Workflows (discoverable)

- There are no `scripts` in `package.json`; however, dev dependencies allow these common commands (examples you can run when developing):
  - Start with ts-node (one-off): `npx ts-node src/app.ts`
  - Live reload during development: `npx nodemon --watch src --ext ts --exec "npx ts-node src/app.ts"`
- Environment: place runtime variables in a `.env` file. `PORT` and `NODE_ENV` are read by [src/config/config.ts](src/config/config.ts).

# Project-specific Patterns & Notes

- `src/config/config.ts` uses a small typed `Config` object and provides defaults. Prefer reading config from that module rather than re-parsing `process.env` elsewhere.
- `src/app.ts` mixes ES module `import` syntax and a CommonJS `require('express')` — this is an implementation oddity to avoid changing without confirmation. An agent may note it and avoid combined module-system refactors unless requested.
- Most dependencies are listed under `devDependencies` (including `express`). Treat this as an indication the repo is early-stage; do not move deps between sections without the user's confirmation.

# Integration Points to Watch For

- No DB clients, message brokers, or external API clients found. If you add integrations, keep connection setup centralized (a new `src/services` or `src/lib` folder) and surface configuration via `src/config/config.ts`.

# How AI agents should make changes

- Prefer minimal, well-scoped edits. This repo is small — changes to `src/app.ts` or `src/config/config.ts` should be limited to the requested feature.
- If proposing to add npm `scripts` or change dependency scopes (devDependencies → dependencies), mention the rationale and include exact `package.json` patch.
- If refactoring module system (ESM ↔ CommonJS), ask before applying broad changes. You may add a short comment in a PR explaining the issue and recommended fix.

# Useful Files (start here)

- [src/app.ts](src/app.ts)
- [src/config/config.ts](src/config/config.ts)
- [package.json](package.json)
- [README.md](README.md)

# Examples (patterns to follow)

- Read configuration: `import config from './config/config'` and use `config.port`.
- Add a new route: update [src/app.ts](src/app.ts) with `app.get('/your-route', handler)` and keep handlers small and typed.

# Next steps for maintainers (optional suggestions)

- Add `scripts` in `package.json` for `start`, `dev`, and `lint` to standardize development commands.
- Consider moving runtime dependencies to `dependencies` and leaving developer-only tools in `devDependencies`.

---
If any section is unclear or you want me to expand examples (test commands, CI, or add scripts), tell me which area to iterate on.
