---
id: faq
title: FAQ
description: Frequently asked questions about OrbitCubs CRM — pricing, platforms, data ownership, AI features, and project status.
sidebar_label: FAQ
keywords:
  - orbitcubs crm faq
  - free crm questions
---

# Frequently Asked Questions

## Is OrbitCubs CRM free?

Yes. OrbitCubs CRM is designed to run entirely on free-tier infrastructure with
no per-seat pricing. Its architecture forbids paid backend functions and paid
storage by design. See [Architecture](/architecture).

## Is it available on an app store?

Not yet. OrbitCubs CRM is in active development (version `0.1.0`). It packages for
Android via Capacitor and builds cleanly, but there is no public store listing at
this time. The [Changelog](/changelog) tracks status honestly.

## What platforms does it run on?

The web app, an Android build (via Capacitor), and a companion browser extension
— all sharing one free-tier Firebase backend.

## Who owns my data?

You do. CRM records live in your own Firestore project and files live in FilesHub;
there is no intermediate paid service keeping copies. See
[Data Export & Deletion](/guides/data-export-and-deletion).

## Does it use AI?

Yes, but client-side. Predictive lead scoring and churn prediction run on your own
data with client-side libraries, and there's an in-app assistant — none of which
relies on a paid AI cloud tier. See [AI & Automation](/features/ai-and-automation).

## Can I connect Outlook email?

Not yet — email integration is **Google-only** today. Outlook would require a
separate Microsoft OAuth app registration and isn't implemented. This is an honest
current limitation.

## Which modules are actually shipped?

The core CRM domains plus six advanced modules (AI assistant, predictive lead
scoring, email automation, calendar sync, churn prediction, push notifications).
A broader set of advanced modules have backend service scaffolding but no UI yet.
The [Changelog](/changelog) is the source of truth.
