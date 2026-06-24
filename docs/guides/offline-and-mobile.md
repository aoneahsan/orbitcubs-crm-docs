---
id: offline-and-mobile
title: Offline & Mobile
description: How OrbitCubs CRM works offline and on Android via Capacitor — local caching, queued writes, and sync on reconnect.
sidebar_label: Offline & Mobile
keywords:
  - offline crm
  - capacitor android crm
  - mobile crm
---

# Offline & Mobile

OrbitCubs CRM is designed to keep working when the network doesn't.

## Offline-first

The app caches data locally so you can read your records without a connection.
Writes you make offline are queued and reconciled when you reconnect. This is the
backbone of field use, where connectivity is inconsistent.

## Android via Capacitor

OrbitCubs CRM packages for **Android** with **Capacitor 8**. The same web app
runs natively, with platform niceties wired in: haptics, local notifications,
network status, status-bar / edge-to-edge handling, app shortcuts, in-app review,
and a privacy screen. Native Google sign-in uses the dedicated Capacitor Google
Auth plugin.

## Building for Android

```bash
yarn build         # web build → dist/
yarn cap:sync      # copy the build into the Android project
```

Then open `android/` in Android Studio to run on a device. You'll need a
`google-services.json` from your Firebase project for native Google sign-in and
analytics.

:::note Edge-to-edge
On Android 15+, OrbitCubs CRM uses the standard edge-to-edge inset handling so
content sits correctly below the status bar and above the navigation bar.
:::

## Related

- [Quick Start](/getting-started/quick-start)
- [Architecture](/architecture)
