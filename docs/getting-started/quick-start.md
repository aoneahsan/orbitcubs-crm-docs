---
id: quick-start
title: Quick Start
description: Run OrbitCubs CRM locally — clone, install with yarn, configure Firebase env, and start the dev server on port 5955.
sidebar_label: Quick Start
keywords:
  - orbitcubs crm setup
  - run crm locally
  - firebase env
---

# Quick Start

OrbitCubs CRM is a React 19 + Vite app with a Capacitor Android target. This
guide gets the web app running locally.

## Prerequisites

- **Node.js** ≥ 24 and **Yarn** (the project is yarn-only — `yarn.lock` is the
  only committed lockfile).
- A **Firebase project** on the free Spark plan (for Auth + Firestore).

## 1. Install

```bash
yarn install
```

## 2. Configure environment

Copy the example env file and fill in your own Firebase web-app keys:

```bash
cp .env.example .env
```

Every key is documented in `.env.example`. The core required keys are:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
VITE_GOOGLE_CLIENT_ID=...      # Google sign-in
VITE_FILES_HUB_API_KEY=...     # file uploads via FilesHub
```

All secrets are read through `import.meta.env.VITE_*`; nothing is hard-coded.

## 3. Run

```bash
yarn dev          # starts Vite on http://localhost:5955
```

Other useful scripts:

```bash
yarn typecheck    # TypeScript, no emit
yarn lint         # ESLint
yarn build        # production build → dist/
yarn cap:sync     # sync the web build into the Android project
```

## 4. (Optional) Android

The Android project lives under `android/`. After a `yarn build` and
`yarn cap:sync`, open it in Android Studio to run on a device or emulator. You'll
need a `google-services.json` from your Firebase project for native Google
sign-in and analytics.

Next: read the [Core Concepts](/getting-started/core-concepts) to understand orgs
and records.
