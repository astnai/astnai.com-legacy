## project structure

- `/src/app` - Next.js App Router pages and layouts
  - `/books` - Books collection page
  - `/links` - Social links and profiles page
  - `/polaroids` - Photo gallery with polaroid-style layout
  - `/projects` - Projects showcase page
  - `/talks` - Technical presentations and talks page
  - `/terminal` - Interactive terminal file system explorer
- `/src/components` - Custom React components organized by feature
  - `/books` - Book-related components
  - `/polaroids` - Polaroid gallery components
  - `/terminal` - Terminal interface components
  - `/icons` - Custom icon components
- `/src/data` - Static data and content management
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions and shared logic
  - `/types` - TypeScript type definitions
- `/public` - Static assets organized by content type
  - `/polaroids` - Photo gallery images
  - `/talks` - Talk presentation assets
  - `/terminal` - Terminal interface assets

## tech stack

- **Frontend**
  - Next.js
  - React
  - TypeScript
  - Tailwind CSS for styling
  - Radix UI for primitives components
  - shadcn/ui for system design
  - motion for animations
  - zod for validation
- **Backend**
  - next.js api routes
- **Tooling**
  - bun (package manager)
  - vercel (hosting & deployment)
  - eslint + prettier (code formatting)

## dev environment

- SHOULD: Clear `.next` cache if experiencing build issues
- MUST: Use `bun run preview` to test production build locally
- MUST: Vercel handles deployment automatically on git push
- MUST: Check `.env.local` for local environment variables
- MUST: Use `bun install` to install existing dependencies
- MUST: Use `bun run type-check` to run typescript checks
- MUST: Use `bun add <package>` to add dependencies
- MUST: Use `bun run build` to build for production
- MUST: Use `bun dev` to start development server
- MUST: Use `bun run lint` to check code style

## Code style

- MUST: TypeScript strict mode
- MUST: Single quotes, no semicolons
- MUST: Use functional patterns where possible

## Interactions

- **Keyboard**
  - MUST: Full keyboard support per
    [WAI-ARIA APG](https://wwww3org/WAI/ARIA/apg/patterns/)
  - MUST: Visible focus rings (`:focus-visible`; group with `:focus-within`)
  - MUST: Manage focus (trap, move, and return) per APG patterns
- **Targets & input**
  - MUST: `touch-action: manipulation` to prevent double-tap zoom; set
    `-webkit-tap-highlight-color` to match design
  - MUST: Hit target ≥24px (mobile ≥44px) If visual <24px, expand hit area
  - MUST: Mobile `<input>` font-size ≥16px or set:
    ```html
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
    />
    ```
  - NEVER: Disable browser zoom
- **Inputs & forms (behavior)**
  - SHOULD: Placeholders end with ellipsis and show example pattern (eg,
    `+1 (123) 456-7890`, `sk-012345…`)
  - SHOULD: Disable spellcheck for emails/codes/usernames
  - MUST: Enter submits focused text input In `<textarea>`, ⌘/Ctrl+Enter
    submits; Enter adds newline
  - MUST: Keep submit enabled until request starts; then disable, show spinner,
    use idempotency key
  - MUST: No dead zones on checkboxes/radios; label+control share one generous
    hit target
  - MUST: Compatible with password managers & 2FA; allow pasting one-time codes
  - MUST: `autocomplete` + meaningful `name`; correct `type` and `inputmode`
  - MUST: Errors inline next to fields; on submit, focus first error
  - MUST: Don’t block typing; accept free text and validate after
  - MUST: Allow submitting incomplete forms to surface validation
  - MUST: Trim values to handle text expansion trailing spaces
  - MUST: Loading buttons show spinner and keep original label
  - MUST: Hydration-safe inputs (no lost focus/value)
  - MUST: Warn on unsaved changes before navigation
  - NEVER: Block paste in `<input>/<textarea>`
- **State & navigation**
  - MUST: URL reflects state (deep-link filters/tabs/pagination/expanded panels)
    Prefer libs like [nuqs](https://nuqs47ngcom/)
  - MUST: Links are links—use `<a>/<Link>` for navigation (support
    Cmd/Ctrl/middle-click)
  - MUST: Back/Forward restores scroll
- **Feedback**
  - SHOULD: Optimistic UI; reconcile on response; on failure show error and
    rollback or offer Undo
  - SHOULD: Ellipsis (`…`) for options that open follow-ups (eg, “Rename…”)
  - MUST: Confirm destructive actions or provide Undo window
  - MUST: Use polite `aria-live` for toasts/inline validation
- **Touch/drag/scroll**
  - MUST: Design forgiving interactions (generous targets, clear affordances;
    avoid finickiness)
  - MUST: During drag, disable text selection and set `inert` on dragged
    element/containers
  - MUST: No “dead-looking” interactive zones—if it looks clickable, it is
  - MUST: Intentional `overscroll-behavior: contain` in modals/drawers
  - MUST: Delay first tooltip in a group; subsequent peers no delay
- **Autofocus**
  - SHOULD: Autofocus on desktop when there’s a single primary input; rarely on
    mobile (to avoid layout shift)

## Animation

- SHOULD: Prefer CSS > Web Animations API > JS libraries
- SHOULD: Choose easing to match the change (size/distance/trigger)
- SHOULD: Animate only to clarify cause/effect or add deliberate delight
- MUST: Animate compositor-friendly props (`transform`, `opacity`); avoid
  layout/repaint props (`top/left/width/height`)
- MUST: Correct `transform-origin` (motion starts where it “physically” should)
- MUST: Animations are interruptible and input-driven (avoid autoplay)
- MUST: Honor `prefers-reduced-motion` (provide reduced variant)

## Layout

- SHOULD: Optical alignment; adjust by ±1px when perception beats geometry
- SHOULD: Balance icon/text lockups (stroke/weight/size/spacing/color)
- MUST: Deliberate alignment to grid/baseline/edges/optical centers—no
  accidental placement
- MUST: Verify mobile, laptop, ultra-wide (simulate ultra-wide at 50% zoom)
- MUST: Respect safe areas (use env(safe-area-inset-\*))
- MUST: Avoid unwanted scrollbars; fix overflows

## Content & Accessibility

- SHOULD: Inline help first; tooltips last resort
- SHOULD: Curly quotes (“ ”); avoid widows/orphans
- SHOULD: Right-clicking the nav logo surfaces brand assets
- MUST: `scroll-margin-top` on headings for anchored links; include a “Skip to
  content” link; hierarchical `<h1–h6>`
- MUST: Accurate names (`aria-label`), decorative elements `aria-hidden`, verify
  in the Accessibility Tree
- MUST: Tabular numbers for comparisons (`font-variant-numeric: tabular-nums` or
  a mono like Geist Mono)
- MUST: Use non-breaking spaces to glue terms: `10&nbsp;MB`, `⌘&nbsp;+&nbsp;K`,
  `Vercel&nbsp;SDK`
- MUST: Don’t ship the schema—visuals may omit labels but accessible names still
  exist
- MUST: Prefer native semantics (`button`, `a`, `label`, `table`) before ARIA
- MUST: Redundant status cues (not color-only); icons have text labels
- MUST: Resilient to user-generated content (short/avg/very long)
- MUST: Skeletons mirror final content to avoid layout shift
- MUST: Icon-only buttons have descriptive `aria-label`
- MUST: No dead ends; always offer next step/recovery
- MUST: Locale-aware dates/times/numbers/currency
- MUST: Use the ellipsis character `…` (not ``)
- MUST: Design empty/sparse/dense/error states
- MUST: `<title>` matches current context

## Performance

- SHOULD: Test iOS Low Power Mode and macOS Safari
- SHOULD: Prefer uncontrolled inputs; make controlled loops cheap (keystroke
  cost)
- MUST: Prevent CLS from images (explicit dimensions or reserved space)
- MUST: Batch layout reads/writes; avoid unnecessary reflows/repaints
- MUST: Track and minimize re-renders (React DevTools/React Scan)
- MUST: Measure reliably (disable extensions that skew runtime)
- MUST: Preload only above-the-fold images; lazy-load the rest
- MUST: Mutations (`POST/PATCH/DELETE`) target <500 ms
- MUST: Virtualize large lists (eg, `virtua`)
- MUST: Profile with CPU/network throttling

## Design

- SHOULD: Hue consistency: tint borders/shadows/text toward bg hue
- SHOULD: Crisp edges via semi-transparent borders + shadows
- SHOULD: Nested radii: child ≤ parent; concentric
- SHOULD: Layered shadows (ambient + direct)
- SHOULD: Match browser UI to bg
- SHOULD: Avoid gradient banding (use masks when needed)
- MUST: Meet contrast—prefer [APCA](https://apcacontrastcom/) over WCAG 2
- MUST: Accessible charts (color-blind-friendly palettes)
- MUST: Increase contrast on `:hover/:active/:focus`
