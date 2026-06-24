---
id: changelog
title: Changelog
description: Release history and honest status of OrbitCubs CRM, including which modules are shipped and which are scaffolded.
sidebar_label: Changelog
keywords:
  - orbitcubs crm changelog
  - release notes
---

# Changelog

The honest, current state of OrbitCubs CRM. This page mirrors the project's
real status — it does not claim features that aren't built.

## 0.1.0 — In development

**Shipped:**

- Core CRM domains: contacts, accounts, leads, opportunities, cases, products,
  quotes, orders, activities, attachments, knowledge base, dashboards, reports.
- Multi-tenant organizations with memberships, roles, permission sets, invites,
  and an audit log.
- Six advanced modules: AI assistant, predictive lead scoring, email automation
  sequences, calendar sync, churn prediction, push notifications.
- Internal collaboration: activity feed with polls, and direct/group messaging.
- Companion browser extension (`extension/`) that builds cleanly.
- Capacitor 8 Android packaging with offline-first support and edge-to-edge.
- Web app verified: `yarn typecheck`, `yarn build`, and `yarn lint` all pass.

**Known limitations (honest):**

- A further set of advanced modules have backend service scaffolding
  (`src/features/BATCH_SERVICES.ts`) but **no UI yet**; several depend on
  third-party providers (for example SMS/video) and are not wired in.
- **Email integration is Google-only**; Outlook is not implemented.
- Push notifications include a **OneSignal** integration point that needs an
  account credential to finish.
- Collaboration `@mentions` currently display a short user identifier rather than
  a resolved display name.
- No public app-store or browser-web-store listing yet.

This changelog is the single source of truth for "what's shipped." It is kept in
sync with the app's release notes.
