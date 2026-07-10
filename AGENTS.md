# AGENTS.md — OrbitCubs CRM Docs

**Last Updated:** 2026-06-24

Public Docusaurus documentation site for **OrbitCubs CRM** (product repo:
`aoneahsan/orbitcubs-crm`, private). This repo is **PUBLIC** — never commit real
`.env`/secrets (only `.env.example`); `.gitignore` enforces this.

## Identity

| Property | Value |
|---|---|
| Repo | `github.com/aoneahsan/orbitcubs-crm-docs` (PUBLIC, remote `o`, branch `main`) |
| Live (planned) | https://orbitcubs-crm-docs.aoneahsan.com |
| Framework | Docusaurus 3 (classic preset) |
| Dev port | 5900 (serve 5901) |
| Brand | Violet `#7C3AED` → Orange `#F97316`; OrbitCubs orbit/cub logo |

## Commands

```bash
yarn install
yarn start        # dev server (port 5900)
yarn build        # static build → build/   (onBrokenLinks: throw)
yarn typecheck
```

## Rules

- **Yarn only.** `nvm` → `npm` (global) → `yarn` (local). No `pnpm`, no
  `packageManager` field. Only `yarn.lock` is committed.
- **Honest content.** Document only what OrbitCubs CRM actually ships. The app is
  in active development (`0.1.0`) with no public store listing — never claim a
  live download or unshipped feature. The `changelog` page is the source of truth.
- **SEO floor.** Keep `static/robots.txt` (AI-bot allowlist + Sitemap), the
  generated `sitemap.xml`, `static/llms.txt`, and the JSON-LD in
  `docusaurus.config.ts` intact.
- **Dual hosting.** Firebase Hosting (`firebase.json`/`.firebaserc`) + GitHub
  Pages (`.github/workflows/deploy-pages.yml`). Deploys are maintainer-only.
- **Content tracker.** `docs/tracking/orbitcubs-crm-docs-content-tracker.json`.

Sync every rule here with `CLAUDE.md`.


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)
