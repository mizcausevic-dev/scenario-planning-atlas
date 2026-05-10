# Scenario Planning Atlas

![Hero](screenshots/01-hero.svg)

## Executive Summary

Scenario Planning Atlas is a React + TypeScript strategy surface for comparing
downside, base-case, and upside operating paths. It is designed to make
scenario selection feel visual, deliberate, and executive-readable instead of
buried in spreadsheets or generic dashboards.

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
| Scenario spine | Downside, base-case, and upside branches arranged with visual symmetry |
| Decision lattice | Strategy levers that change which branch becomes rational |
| Exposure map | Sensitivity zones where scenario error becomes expensive |
| Briefing layer | Executive-facing narrative framing for what changed, why it matters, and what to do next |
| Commitment queue | Named owners and next moves attached to a specific branch |

## Architecture

```mermaid
flowchart LR
  A["Scenario spine"] --> B["Decision lattice"]
  B --> C["Exposure map"]
  C --> D["Briefing layer"]
  D --> E["Commitment queue"]
```

## Screenshots

### Hero
![Hero](screenshots/01-hero.svg)

### Scenario Spine
![Scenario Spine](screenshots/02-spine.svg)

### Decision Lattice
![Decision Lattice](screenshots/03-lattice.svg)

### Exposure and Commitments
![Exposure and Commitments](screenshots/04-exposures.svg)

## Setup

```powershell
Set-Location "C:\Users\chaus\Documents\Codex\2026-05-06\you-are-working-in-the-my\scenario-planning-atlas"
npm install
npm run dev
```

## Validation

```powershell
Set-Location "C:\Users\chaus\Documents\Codex\2026-05-06\you-are-working-in-the-my\scenario-planning-atlas"
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

