# Design System & Token Specifications

## 1. Color Palette (OKLCH Precision System)

### Dark Mode (Primary Default)
- **Surface 0 (Canvas Base):** `oklch(0.12 0.015 250)` — Deep cosmic slate with subtle indigo undertone (never pure #000)
- **Surface 1 (Card / Container):** `oklch(0.16 0.02 250)` — Elevated container
- **Surface 2 (Hover / Active State):** `oklch(0.20 0.025 250)` — Interactive hover state
- **Border Subtle:** `oklch(0.26 0.02 250 / 0.7)` — Deliberate crisp hairline border
- **Border Active / Focus:** `oklch(0.65 0.18 250)` — Crisp accent border
- **Text Primary:** `oklch(0.96 0.005 250)` — Crisp high contrast readable text (never pure #fff)
- **Text Secondary:** `oklch(0.72 0.02 250)` — Balanced secondary description
- **Text Muted:** `oklch(0.50 0.02 250)` — Subtle labels, metadata, timestamps

### Light Mode (Adaptive)
- **Surface 0 (Canvas Base):** `oklch(0.985 0.005 250)` — Clean architectural warm white
- **Surface 1 (Card / Container):** `oklch(0.955 0.01 250)` — Subtle contrast card
- **Surface 2 (Hover):** `oklch(0.92 0.015 250)`
- **Border Subtle:** `oklch(0.85 0.015 250)`
- **Text Primary:** `oklch(0.18 0.02 250)`
- **Text Secondary:** `oklch(0.40 0.02 250)`
- **Text Muted:** `oklch(0.60 0.015 250)`

### Accent Colors
- **Brand Accent (Cobalt / Electric Indigo):** `oklch(0.60 0.22 260)`
- **Success / Available Status:** `oklch(0.70 0.18 145)` (Emerald glow)
- **Highlight Accent:** `oklch(0.75 0.16 200)` (Cyan electric)

---

## 2. Typography

- **Primary Font Family:** `'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Monospace Accent:** `'JetBrains Mono', 'Fira Code', ui-monospace, monospace` (khusus code tags, metric badges, and terminal snippets)
- **Heading Scale:**
  - Hero Display: `clamp(2.5rem, 5vw + 1rem, 4.25rem)`, `font-weight: 800`, `letter-spacing: -0.035em`, `line-height: 1.08`
  - Section Title (H2): `clamp(1.75rem, 3vw + 0.5rem, 2.5rem)`, `font-weight: 700`, `letter-spacing: -0.025em`
  - Card Title (H3): `1.25rem` to `1.5rem`, `font-weight: 600`, `letter-spacing: -0.015em`
  - Body Text: `1rem` (16px), `line-height: 1.65`, max-width `68ch`

---

## 3. Elevation, Borders & Glass Accents

- **Hairline Borders:** `1px solid var(--border-subtle)`
- **Glassmorphism Backdrop:** `backdrop-filter: blur(12px) saturate(160%)` (digunakan pada sticky header dan interactive floating dock)
- **Box Shadows:**
  - Ambient: `0 1px 2px 0 oklch(0 0 0 / 0.25)`
  - Elevated Card: `0 8px 30px -8px oklch(0 0 0 / 0.35)`
  - Hover Glow: `0 12px 36px -10px oklch(0.60 0.22 260 / 0.25)`

---

## 4. Spacing & Rhythm

- Fluid container `max-width: 1200px` dengan padding horizontal `clamp(1rem, 4vw, 2.5rem)`.
- Section vertical spacing: `clamp(4rem, 8vw, 7.5rem)` untuk memberikan visual breathing room yang elegan.
- Asymmetric project layouts: perpaduan Bento grid display dan split-column interactive cards.

---

## 5. Motion & Transitions

- **Default Transition:** `all 200ms cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- **Card Lift:** `transform: translateY(-4px)` saat hover dengan subtle border highlight.
- **Scroll Behavior:** Smooth scrolling dengan offset navigasi yang tepat.
