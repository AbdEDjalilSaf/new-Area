# Sean Halpin Inspired Design Reference

Reference source: https://www.seanhalpin.xyz

This file captures an inspired design direction for this portfolio project. It is not a pixel-perfect clone, and it should not reuse Sean Halpin's proprietary fonts, artwork, or exact brand assets.

## Design Character

The site feels warm, playful, and highly polished. Its personality comes from oversized friendly type, a soft parchment canvas, deep green text, pastel project surfaces, rounded pill navigation, and small decorative sparkle icons.

Use this as a direction for a personal portfolio that should feel:

- Designer-led and expressive.
- Friendly rather than corporate.
- Spacious, calm, and easy to scan.
- Colorful, but anchored by a restrained green text system.

## Typography

### Display Type

Observed display font: `acorn`.

Use an `acorn`-style display face for major headings: rounded, heavy, soft, playful, and slightly retro. Since the original font file should not be copied, use a legally available alternative or a project-owned font with a similar personality.

Suggested alternatives:

- `Cooper Black` for a warm, rounded display feel.
- `Fraunces` for expressive, soft serif display text.
- `Recoleta` or `Sofia Pro Soft` if already licensed.
- A heavy rounded sans if the portfolio should feel more product-focused.

Suggested display stack:

```css
--font-display: "Fraunces", "Cooper Black", Georgia, serif;
```

Observed heading behavior:

- Hero heading is extremely large.
- Weight is bold, around `700`.
- Letter spacing is tight on the largest headings.
- Line height is compact, close to `1`.
- Headings use deep green.

Suggested scale:

```css
--text-hero: clamp(3.2rem, 8vw, 8rem);
--text-section-title: clamp(2rem, 4vw, 4rem);
--text-card-title: clamp(1.6rem, 2.8vw, 2.8rem);
```

### Body Type

Observed body font: `gt`.

Use a clean, readable sans-serif for navigation, paragraphs, labels, and buttons. Do not copy the original font file. Use the current project font or a similar accessible stack.

Suggested body stack for this project:

```css
--font-body: var(--font-geist-sans), Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Observed body behavior:

- Navigation text is medium-sized and relaxed.
- Intro paragraph is larger than normal body copy.
- Labels use uppercase tracking.
- Body text color is usually muted green.

Suggested text values:

```css
--text-body: 1rem;
--text-lead: clamp(1.125rem, 1.6vw, 1.375rem);
--text-label: 0.9375rem;
--leading-body: 1.5;
--leading-lead: 1.6;
```

## Color Palette

### Core Colors

The site uses a warm neutral base with deep green text. This keeps the playful palette from becoming noisy.

```css
--color-background: #ede7de;
--color-text-primary: #025a4e;
--color-text-secondary: #4c6763;
--color-text-strong: #364442;
--color-surface-soft: rgba(255, 255, 255, 0.5);
--color-white: #ffffff;
--color-near-black: #1c1c1c;
```

### Inspired Card Colors

Use pastel cards for featured projects. Keep text dark enough for contrast.

```css
--color-card-lilac: #d094e5;
--color-card-mint: #a3dcd4;
--color-card-rust: #e8b89c;
--color-card-baby-blue: #bddff9;
--color-card-white: #ffffff;
--color-card-dark: #1c1c1c;
```

### Usage Notes

- Use `#ede7de` as the dominant page background.
- Use `#025a4e` for hero headings and major section titles.
- Use `#4c6763` for navigation and supporting copy.
- Use card colors sparingly, mainly for project tiles.
- Use white translucent surfaces for selected nav pills and subtle highlights.
- Avoid turning the entire interface into one pastel color. The green text and parchment base should hold the system together.

## Icons And Decorative Assets

Observed icon style:

- Minimal sparkle/star shapes near the hero heading.
- Simple SVG-like decoration.
- Icons are decorative, not dense or functional.
- Project cards use custom illustrative assets and product screenshots.

Recommended approach:

- Use small sparkle/star decorations as lightweight SVG or CSS shapes.
- Keep decorative icons white or pale with subtle contrast against the background.
- Use `lucide-react` only for functional UI icons if the app later adds controls or buttons.
- Do not copy Sean Halpin's exact star SVGs, project illustrations, or screenshots.
- For portfolio projects, use your own screenshots, mockups, or generated bitmap assets.

Suggested decorative icon rules:

```css
--icon-sparkle-size-sm: 42px;
--icon-sparkle-size-lg: 68px;
--icon-sparkle-color: #ffffff;
```

## Layout Patterns

### Page Background

The page background is a warm parchment color with a very soft pastel wash. This can be recreated with subtle layered radial gradients.

Suggested background:

```css
background:
  radial-gradient(circle at 18% 18%, rgba(255, 235, 170, 0.35), transparent 28%),
  radial-gradient(circle at 84% 10%, rgba(163, 220, 212, 0.45), transparent 30%),
  radial-gradient(circle at 50% 0%, rgba(208, 148, 229, 0.18), transparent 34%),
  #ede7de;
```

### Navigation

Observed pattern:

- Centered horizontal nav.
- Pill-shaped active item.
- Selected item uses a translucent white surface.
- Text is green and medium weight.
- Navigation sits with generous top spacing.

Suggested values:

```css
--nav-height: 38px;
--nav-radius: 999px;
--nav-gap: 0.75rem;
--nav-padding-x: 1.25rem;
```

### Hero

Observed pattern:

- First screen is dominated by the name and role.
- Heading is centered and very large.
- Supporting line is centered below the heading.
- Decorative sparkles flank the heading.

Implementation guidance:

- Keep hero text as the main first-viewport signal.
- Use a max-width so the heading breaks intentionally.
- Use a lead paragraph width around `680px`.
- Keep the composition airy; do not put hero text inside a card.

### Project Cards

Observed pattern:

- Large rounded cards with strong pastel backgrounds.
- Cards have generous internal padding.
- Border radius is very large, around `64px` on desktop.
- Cards contain small uppercase labels, large titles, and visual assets.
- Card grid alternates widths for rhythm.

Suggested values:

```css
--card-radius: clamp(2rem, 5vw, 4rem);
--card-padding: clamp(1.5rem, 4vw, 4rem);
--card-min-height: 28rem;
--card-gap: clamp(1.25rem, 3vw, 3rem);
```

For smaller screens, reduce the radius and use a single-column project grid.

## Suggested CSS Variables

These variables can be added later to `app/globals.css` if the design direction is implemented.

```css
:root {
  --portfolio-bg: #ede7de;
  --portfolio-text-primary: #025a4e;
  --portfolio-text-secondary: #4c6763;
  --portfolio-text-strong: #364442;

  --portfolio-card-lilac: #d094e5;
  --portfolio-card-mint: #a3dcd4;
  --portfolio-card-rust: #e8b89c;
  --portfolio-card-blue: #bddff9;
  --portfolio-card-dark: #1c1c1c;

  --portfolio-radius-pill: 999px;
  --portfolio-radius-card: clamp(2rem, 5vw, 4rem);

  --portfolio-shadow-soft: 0 50px 100px -20px rgba(0, 0, 0, 0.15);

  --portfolio-font-display: "Fraunces", "Cooper Black", Georgia, serif;
  --portfolio-font-body: var(--font-geist-sans), Inter, ui-sans-serif, system-ui, sans-serif;
}
```

## Suggested Tailwind Usage

The current project uses Next, React, and Tailwind. If this reference becomes the site design, the implementation can start with Tailwind utility classes and a small set of CSS variables.

Useful Tailwind patterns:

```tsx
<main className="min-h-screen bg-[var(--portfolio-bg)] text-[var(--portfolio-text-primary)]">
  <nav className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full">
    <a className="rounded-full bg-white/50 px-5 py-2 text-[var(--portfolio-text-secondary)]">
      Work
    </a>
  </nav>

  <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
    <h1 className="font-[var(--portfolio-font-display)] text-[clamp(3.2rem,8vw,8rem)] font-bold leading-none tracking-tight">
      Hi. I'm Seán. A Designer.
    </h1>
    <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[var(--portfolio-text-secondary)]">
      I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
    </p>
  </section>
</main>
```

Adapt the text to this portfolio owner's name, role, and projects.

## Implementation Boundaries

- Do not copy Sean Halpin's exact font files.
- Do not reuse his project screenshots, custom illustrations, or icon files.
- Do not duplicate his exact copywriting for a personal portfolio.
- Use this file as a design mood and implementation guide.
- Replace all example text and project references with this portfolio's real content before shipping.

## Checklist For Future Implementation

- Choose and install a licensed display font.
- Add CSS variables to `app/globals.css`.
- Replace the default Next starter page in `app/page.tsx`.
- Build a centered pill nav.
- Build a large expressive hero section.
- Build pastel project cards using original portfolio assets.
- Verify desktop and mobile screenshots before finalizing.
