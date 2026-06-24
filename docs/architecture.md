---
id: architecture
title: Architecture
description: The OrbitCubs CRM tech stack and design — React 19 + Vite, Capacitor Android, Firebase free tier, Radix UI + Zustand, domain-driven modules, and a zero-cost constraint.
sidebar_label: Architecture
keywords:
  - crm architecture
  - react 19 vite
  - firebase free tier
  - zero cost architecture
---

# Architecture

OrbitCubs CRM is a single React codebase that runs on the web and ships to
Android, built deliberately to cost nothing to operate.

## Stack

| Layer | Technology |
|---|---|
| UI | React 19, Radix UI Themes, lucide-react icons |
| Language | TypeScript 5.9 |
| Build | Vite 7 (`@vitejs/plugin-react-swc`) |
| Routing | react-router 7 |
| State | Zustand |
| Forms | React Hook Form + Zod |
| Backend | Firebase (Auth + Firestore), free Spark tier |
| Files | FilesHub (not paid object storage) |
| Mobile | Capacitor 8 (Android) |
| Charts | D3 |
| Analytics | Firebase Analytics, Amplitude, Microsoft Clarity |
| Errors | Sentry |

## Domain-driven modules

The `src/` tree is organized by **domain** — `contacts`, `leads`,
`opportunities`, `accounts`, `cases`, `products`, `quotes`, `orders`,
`activities`, `attachments`, `knowledge`, `dashboards`, `reports`, `campaigns`,
`automation`, `collaboration`, `email`, `forecasting`, `orgs`, `users`, and more.
Each domain owns its types, services, stores, and pages. Cross-cutting services
(auth, notifications, observability) live alongside them.

## Zero-cost constraint

A hard rule shapes the whole design: **everything must run client-side on free
services.**

- **No Firebase Functions** and **no Firebase Storage** — the app talks to
  Firestore directly and uploads files through FilesHub.
- **No paid AI tiers** — predictive scoring, churn prediction, and NLP run with
  client-side libraries.
- **No per-seat pricing** — the product is free to operate.

## Multi-tenant security

All data is scoped under an **organization**, with membership, roles, and
permission sets enforced by **Firestore security rules** (`firestore.rules`).
Sensitive admin actions are recorded in an audit log.

## Three surfaces

The same backend powers three surfaces: the **web app**, the **Android app**
(via Capacitor), and the **browser extension** (`extension/`). See the
[Browser Extension](/features/browser-extension) and
[Offline & Mobile](/guides/offline-and-mobile) pages.
