---
slug: /
id: intro
title: OrbitCubs CRM
description: OrbitCubs CRM is a free-tier, client-side CRM (React 19 + Capacitor + Firebase) for small teams and solo operators, with a companion browser extension for capture from any page.
sidebar_label: Introduction
sidebar_position: 1
keywords:
  - orbitcubs crm
  - free crm
  - client-side crm
  - firebase crm
  - react capacitor crm
---

# OrbitCubs CRM

**OrbitCubs CRM is a focused, free-tier customer-relationship-management product
for small teams and solo operators** — the kind of CRM you can adopt without
paying per seat. It tracks contacts, deals, and pipeline on free-tier Firebase,
ships an Android build through Capacitor, and pairs with a browser extension so
you can capture a contact or a note from any page you're on.

:::info Project status
OrbitCubs CRM is in **active development** (version `0.1.0`). There is **no
public app-store listing yet**, so this documentation deliberately describes the
product and its shipped feature areas without claiming a live download. Six
advanced modules ship today; a further set of advanced modules have backend
service scaffolding but no UI yet. See the [Changelog](/changelog) and
[Architecture](/architecture) for the honest current state.
:::

## Who it's for

- **Solo operators and founders** who want contact + deal tracking without a
  monthly per-seat bill.
- **Small sales and support teams** that need a shared pipeline, cases, quotes,
  and a simple knowledge base.
- **Field users** who need the app on Android with offline support.

## What you get

| Area | What it does |
|---|---|
| [Contacts & Accounts](/features/contacts-and-accounts) | People and the companies they belong to, with a 360° view. |
| [Leads & Opportunities](/features/leads-and-opportunities) | Capture leads, qualify them, and move deals through a pipeline. |
| [Cases & Support](/features/cases-and-support) | Track support cases through a queue with comment threads. |
| [Products, Quotes & Orders](/features/products-quotes-orders) | A product catalog feeding quotes and orders. |
| [Activities & Knowledge](/features/activities-and-knowledge) | Tasks, calls, and a searchable knowledge base. |
| [Dashboards & Reports](/features/dashboards-and-reports) | Build dashboards and run reports on your data. |
| [AI & Automation](/features/ai-and-automation) | Assistant, lead scoring, workflows, and approvals. |
| [Email & Collaboration](/features/email-and-collaboration) | Email templates/sequences plus an internal feed and messaging. |
| [Browser Extension](/features/browser-extension) | Capture contacts and notes from any web page. |

## Principles

- **Zero-cost by design.** Everything runs client-side on free-tier Firebase —
  no paid backend functions, no per-seat pricing. See [Architecture](/architecture).
- **Offline-first.** Local caching keeps the app usable without a connection and
  syncs when you reconnect.
- **Multi-tenant.** Data is organized under an **organization** so teams stay
  isolated.

Start with the [Quick Start](/getting-started/quick-start), then learn the
[Core Concepts](/getting-started/core-concepts).
