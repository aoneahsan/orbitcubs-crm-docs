---
id: data-export-and-deletion
title: Data Export & Deletion
description: How OrbitCubs CRM handles your data — export options and account/data deletion, in line with its zero-cost, client-side architecture.
sidebar_label: Data Export & Deletion
keywords:
  - data export
  - account deletion
  - gdpr crm
---

# Data Export & Deletion

OrbitCubs CRM is built so your data stays yours.

## Where your data lives

Your CRM records live in **Firestore** under your organization, and uploaded
files live in **FilesHub**. The app talks to these directly; there is no
intermediate paid backend storing copies of your data.

## Export

CRM data is structured and queryable, and the app includes data-management and
reporting tools for getting records out in a usable form (for example, table
exports from reports). Because everything is standard Firestore data under your
own project, you also retain the option to export directly from your Firebase
project.

## Deletion

When you delete records, they are removed from Firestore. Account and data
deletion follows the principle that removing your account removes the data
associated with it, including files stored in FilesHub. Always delete files
before re-uploading replacements so old copies don't linger.

:::note In development
OrbitCubs CRM is at version `0.1.0`. The exact in-app export and deletion flows
are evolving; this page describes the intended, honest behavior consistent with
the architecture. See the [Privacy](/privacy) page for the data-handling summary.
:::

## Related

- [Privacy](/privacy)
- [Architecture](/architecture)
