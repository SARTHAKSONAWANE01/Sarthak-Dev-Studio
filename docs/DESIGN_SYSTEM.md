# Sarthak Dev Studio — Design System Specifications

This document details the visual rules, layout guidelines, and animation systems of Sarthak Dev Studio V2.

## Color System

- **Background**: `#ffffff` (Pure White)
- **Foreground**: `#000000` (Pure Black)
- **Secondary**: `#555555` (Neutral Grey)
- **Muted**: `#999999` (Light Grey)

## Typography Scale

- **Serif Font**: `Instrument Serif` (for editorial display headings)
- **Sans-Serif Font**: `Inter` (for clean body text, navigation elements, and captions)

## Layout & Grids

- **Max Width**: 1200px (standard grid container)
- **Wide Width**: 1440px (wide layouts)
- **Section Spacing**: Fluid clamp `clamp(80px, 12vw, 160px)` for premium spatial pacing.

## Transitions & Motion

- **Ease Curve**: Custom bezier `cubic-bezier(0.16, 1, 0.3, 1)` (Luxury ease-out)
- **Springs**: High stiffness, damp-loaded custom spring transforms for micro-interactions.

## Components

### Hero Section
- Editorial time-based greeting.
- Staggered entry animation triggers.
- Magnetic spring CTAs.

### Navigation Bar
- Sticky top header overlay.
- High-contrast links with thin bottom underline slides.
- Monochrome route indicators.

