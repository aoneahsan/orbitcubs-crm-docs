---
id: privacy
title: Privacy
description: How OrbitCubs CRM handles data — Firebase Auth and Firestore, FilesHub for files, analytics and error reporting, and your control over deletion.
sidebar_label: Privacy
keywords:
  - orbitcubs crm privacy
  - crm data handling
---

# Privacy

This page summarizes how OrbitCubs CRM handles data. It reflects the product's
architecture honestly; as the app is in active development (`0.1.0`), the in-app
legal pages are the authoritative, versioned source when you run the app.

## What data is processed

- **Account & profile:** your sign-in identity (via Google / Firebase Auth) and
  your organization membership.
- **CRM records:** the contacts, accounts, leads, opportunities, cases, products,
  quotes, orders, activities, knowledge articles, and related data you create.
- **Files:** documents you attach, stored via **FilesHub**.

## Where it lives

Data is stored in **Firebase Firestore** under your organization and protected by
Firestore security rules. Files are stored in **FilesHub**. OrbitCubs CRM uses no
paid backend functions and no Firebase Storage.

## Third-party processors

OrbitCubs CRM may use the following, only when configured:

- **Firebase** (Auth, Firestore, Analytics) — core backend and product analytics.
- **Amplitude** and **Microsoft Clarity** — product analytics / session insight.
- **Sentry** — error reporting.
- **FilesHub** — file storage.

These act as processors for the app's own operation. Analytics and error
reporting activate only when their keys are configured.

## Your control

You can delete your records and your account; deleting your account removes the
data associated with it, including files in FilesHub. See
[Data Export & Deletion](/guides/data-export-and-deletion).

## Contact

Questions about privacy: **aoneahsan@gmail.com** (Ahsan Mahmood,
[aoneahsan.com](https://aoneahsan.com)).
