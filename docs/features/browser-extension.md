---
id: browser-extension
title: Browser Extension
description: The OrbitCubs CRM companion browser extension captures contacts and notes from any web page, turning everyday browsing into CRM capture moments.
sidebar_label: Browser Extension
keywords:
  - crm browser extension
  - capture contacts
  - chrome extension crm
---

# Browser Extension

The companion **browser extension** is OrbitCubs CRM's daily-habit hook: it lets
you capture from any page without switching to the app.

## What it does

- **Capture contacts and notes** from the page you're on, so a prospect you find
  while browsing lands in the CRM in a couple of clicks.
- Acts as a quick-access surface to your CRM so capture becomes a habit rather
  than a chore.

## How it fits

The extension is a separate package in the same repository (`extension/`), built
and shipped independently from the main app, and it talks to the same free-tier
Firebase backend the app uses. Like the rest of OrbitCubs CRM, it follows
browser-extension store rules: no remotely-loaded code, bundled dependencies
only, and authentication through approved extension APIs.

:::info Status
The extension is part of the repository and builds cleanly. It is not yet
published to a browser web store. See the [Changelog](/changelog) for the current
state.
:::

## Related

- [Contacts & Accounts](/features/contacts-and-accounts)
- [Activities & Knowledge](/features/activities-and-knowledge)
- [Architecture](/architecture)
