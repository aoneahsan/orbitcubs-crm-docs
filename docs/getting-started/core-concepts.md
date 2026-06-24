---
id: core-concepts
title: Core Concepts
description: Understand the OrbitCubs CRM data model — organizations, memberships and roles, records, and the offline-first sync model.
sidebar_label: Core Concepts
keywords:
  - crm data model
  - multi-tenant crm
  - rbac roles permissions
---

# Core Concepts

A few ideas explain how everything in OrbitCubs CRM fits together.

## Organizations (multi-tenant)

Every piece of data belongs to an **organization** (`org`). An org is your team's
isolated workspace. Users join an org through an **invite**, and their access is
governed by a **membership** record. This keeps each team's contacts, deals, and
cases separate from every other team's.

## Memberships, roles, and permissions

Within an org, each member has:

- a **system role** (e.g. owner / admin / member),
- zero or more **custom roles**, and
- **permission sets** that grant fine-grained access.

Admins can invite members, suspend or reactivate them, change roles, and review
an **audit log** of sensitive actions.

## Records

The CRM domains are all **records** stored in Firestore collections under the
org — contacts, accounts, leads, opportunities, cases, products, quotes, orders,
activities, knowledge articles, dashboards, and reports. Records share common
patterns: created/updated metadata, ownership, and consistent list/detail views.

## Offline-first sync

OrbitCubs CRM is built to keep working without a connection. Reads are served
from a local cache, writes are queued, and changes reconcile when you reconnect.
This matters most on the Android build for field use. See
[Offline & Mobile](/guides/offline-and-mobile).

## Zero-cost architecture

There is no paid backend. The app talks directly to free-tier Firebase (Auth +
Firestore), uses **FilesHub** for file uploads instead of paid object storage,
and never relies on Firebase Functions. Read more in
[Architecture](/architecture).
