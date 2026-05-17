# Scenario Planning Atlas

![Hero](screenshots/01-hero.png)

## Executive Summary

Scenario Planning Atlas is a React + TypeScript strategy surface for comparing
downside, base-case, and upside operating paths. It is designed to make
scenario selection feel visual, deliberate, and executive-readable instead of
buried in spreadsheets or generic dashboards. The current version adds a
control-room layer with live scenario modes, projection rails, and a temporal
ledger so the planning surface feels operational instead of static.

## Why It Matters

This project shows:

- frontend product design beyond standard dashboard tropes
- strategy translation across revenue, growth, AI, operations, and governance
- a cleaner visual system for scenario comparison and decision consequence
- a stronger editorial layer for executive and operator communication

## Tech Stack

[![React](https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827&color=0F172A)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-111827?style=for-the-badge&logo=vite&logoColor=FACC15&labelColor=111827&color=7C3AED)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-111827?style=for-the-badge&logo=typescript&logoColor=BFDBFE&labelColor=111827&color=2563EB)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-Strategy_UI-111827?style=for-the-badge&logo=css&logoColor=F8FAFC&labelColor=111827&color=475569)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-111827?style=for-the-badge&logo=vitest&logoColor=FCD34D&labelColor=111827&color=92400E)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-111827?style=for-the-badge&logo=opensourceinitiative&logoColor=E5E7EB&labelColor=111827&color=84CC16)](https://opensource.org/license/mit)

## Overview

| Area | What it shows |
| --- | --- |
| Command header | Active context, mode state, and risk framing before the user even reaches the planning canvas |
| Scenario console | Live downside / base / upside switching with confidence and drift meters |
| Scenario spine | Downside, base-case, and upside branches arranged with visual symmetry |
| Projection rail | Month-by-month scenario compounding with clearer branch momentum |
| Decision lattice | Strategy levers that change which branch becomes rational |
| Exposure map | Sensitivity zones where scenario error becomes expensive |
| Temporal ledger | A structured readout of the variables shaping branch quality |
| Briefing layer | Executive-facing narrative framing for what changed, why it matters, and what to do next |
| Commitment queue | Named owners and next moves attached to a specific branch |

## Architecture

```mermaid
flowchart LR
  A["Command header"] --> B["Scenario console"]
  B --> C["Scenario spine"]
  C --> D["Projection rail"]
  D --> E["Decision lattice"]
  E --> F["Exposure map"]
  F --> G["Temporal ledger"]
  G --> H["Briefing layer"]
  H --> I["Commitment queue"]
```

## Screenshots

### Hero
![Hero](screenshots/01-hero.png)

### Scenario Spine
![Scenario Spine](screenshots/02-spine.png)

### Downside Mode
![Downside Mode](screenshots/03-downside-mode.png)

### Exposure and Ledger
![Exposure and Ledger](screenshots/04-briefing-and-ledger.png)

### Briefing and Queue
![Briefing and Queue](screenshots/05-briefing-queue.png)

## Setup

```powershell
cd scenario-planning-atlas
npm install
npm run dev
```

## Validation

```powershell
cd scenario-planning-atlas
npm test
npm run build
npm run lint
```

## Portfolio Links

- [Kinetic Gain](https://kineticgain.com/)
- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Skills / Portfolio](https://mizcausevic.com/skills/)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)
