# ENTRY BLUEPRINT – The crew's log (rich narrative entries)

**Read this file + `src/content/entries/_template.md` every time you are asked to create a new entry.**

This is the canonical scaffold for the style the user wants: image reel at top, hands-on + lightly poetic narrative that eases in and goes deeper, clean structure, visual comparison at the end, coastal background for geology-type topics.

---

## Core Narrative Arc (must follow)

1. **Opening hook** (1–2 paragraphs)
   - The big slightly poetic idea (e.g. “the same sea that once helped form this rock is now taking it apart again”).
   - Put the reader on location immediately.

2. **Description**
   - Pure sensory, hands-on first impressions: what the surface feels like underfoot (e.g. steeled sand), how freshly broken pieces behave, sounds (metallic/hollow when flicked or struck), how it catches the light, weathering features (tafoni etc.).
   - Keep it observational and non-destructive — avoid suggesting breaking rocks in the field.

3. **Observations**
   - High-level topography and setting, told accessibly.
   - Locals and guides are happy to explain the island’s shape (e.g. Troodos massif to the south, Kyrenia Range to the north, the Mesaoria plain/basin in between).
   - Explain that the coastal exposures sit on the uplifted edge of the ancient basin.
   - Light introduction to the seaway + uplift that brought the marine sediments to the surface.
   - Clean transition to the deeper technical story + a brief honest note on sources (observation + references + some assistance shaping the narrative).

4. **Deeper Notes**
   - Detailed formation story (how the sediment became rock).
   - Include a clear explanation of groundwater / cementation (where the water comes from even though the material was once submerged, how it provides the dissolved carbonate after uplift).
   - Why the rock weathers and sounds the way it does (porosity, incomplete cementation, metallic ring, etc.).
   - Current processes (haloclasty, tafoni formation) with on-the-ground observations.
   - Use logical ### sub-headings so the ToC has good jump targets (e.g. Formation, Groundwater and Cementation, Haloclasty Today).

5. **Language Notes**
   - Etymology (including Greek connections where relevant), local names, how the processes are named.
   - Natural landing that ties the rock and the processes together.

6. **Summary** (factual recap)
   - Short, didactic summary that refers back to the key concepts the reader has just learned (age, depositional setting, cementation, porosity, haloclasty, etc.).
   - Ends with “See also” links using <Term> components.

7. **Visual comparison** (at the very end, after the MD content)
   - The tabbed single-card interface (see below). Rendered via component in the page file, not inside the MD.

---

## Frontmatter (copy this pattern)

```yaml
---
title: "Your Title"
topic: "Geology"          # Botany | Geology | History | Religion | Language
date: "2026-06-08"
summary: "One calm sentence that sets the scene and invites reading."
layer: "coastal"          # coastal for most geology/land topics
gallery:
  - src: "/images/entries/your-slug/your-slug-01.webp"
    caption: "Clear readable caption"
    alt: "Good alt text"
  # ... 4 images recommended
---
```

Images go in: `public/images/entries/your-slug/`

---

## Required Components & Placement

- **Photo reel** → automatic when `gallery` exists in frontmatter (uses `PhotoReel` component).
- **Table of Contents** → automatic for rich entries (gallery + multi-section content). Small Wikipedia-style "Contents" box appears right after the reel (before the prose). Auto-generated from h2/h3, with active highlighting, smooth scroll, and mobile collapse. See `TableOfContents.astro`.
- **Tab-style comparison** at the very end → use `ComparisonTabs.astro` (single card with clickable top tabs). Render it explicitly in the page after `<Content />` for that slug only. Give it `id="visual-comparison"` so the ToC can link to it.
- Use the standard headings: ## Description, ## Observations, ## Deeper Notes, ## Language Notes, followed by a factual ## Summary. Write the prose so it flows as one continuous story. Add logical ### sub-headings inside ## Deeper Notes (e.g. ### Formation, ### Groundwater and Cementation, ### Haloclasty Today) so the ToC has useful jump targets. The calcarenite article is the current reference for exact heading names and flow.

---

## Voice Rules (strict)

- Hands-on and observational first (Description section is pure sensory experience).
- Lightly poetic but grounded in the opening hook and early sections — tone it down as the article progresses into Observations and Deeper Notes.
- Short-to-medium paragraphs.
- Use “when you walk…”, “flick a finger…”, “it rings with…”, “you can watch… in real time” liberally for immediacy.
- ELI5 explanations (especially formation and groundwater) must be narrated, clear, and use parentheticals for technical terms so they enhance flow without clutter.
- The factual ## Summary at the end serves as the landing / recap (no long poetic closing reflection).
- The visual comparison at the end acts as the “look at its relatives” payoff.

---

## Files You Must Know

- `src/content/entries/_template.md` → the actual working template with full example text and instructions. Copy this when starting a new rich entry.
- `src/components/PhotoReel.astro` → the image reel (generic).
- `src/components/ComparisonTabs.astro` → the reusable tabbed comparison (generic – pass your own items).
- `ENTRY_BLUEPRINT.md` (this file) → quick reference.

---

## How to Create a New Entry (step-by-step)

1. Copy `src/content/entries/_template.md` → `your-kebab-slug.md`
2. Fill frontmatter (include `gallery` for the photo reel — the layout will auto-show PhotoReel + TableOfContents).
3. Follow the narrative arc above. Use the exact heading names from the current calcarenite article (## Description, ## Observations, ## Deeper Notes with good ### subs, ## Language Notes, then a factual ## Summary). Add logical ### sub-headings (especially inside ## Deeper Notes, e.g. ### Formation, ### Groundwater and Cementation, ### Haloclasty Today) so the ToC has useful jump targets.
4. Optimize 4 images into `public/images/entries/your-kebab-slug/`.
5. If you need a comparison section, use `ComparisonTabs` (copy the call site from the calcarenite entry page; give the root element `id="visual-comparison"` so the ToC can include a link to it).
6. Rebuild and test on mobile + desktop. The ToC appears automatically after the reel for rich entries.
7. Add relevant terms to the glossary over time and use `<Term name="..." />` in the text. Hyperlinks and full glossary integration can be added later.

---

**Table of Contents (Wikipedia-style "Contents")**

Rich entries now include a small, elegant auto-generated Table of Contents right after the photo reel (before the main prose). 

- Auto-scans the h2/h3 headings inside the article.
- Clickable links with smooth scroll.
- Highlights the current section as you scroll (IntersectionObserver).
- Mobile: collapsible via native <details> (keeps the reading surface clean).
- "Small" by design — only shows when there are enough headings.
- Consistent subtle hierarchy (no keyword exceptions or special sidebars): h2 entries at base level; h3 entries indented with a thin warm-stone left thread line. The only bold treatment is the active section (IntersectionObserver).

**In-text headers (matching treatment for flow)**
Main ## headings stay strong (serif, 600 weight). ### sub-headings receive the same calm accent used in the ToC: medium weight, warm stone color, and a thin left border "thread". This makes "Formation", "Haloclasty Today", etc. easy to scan in the running text without clutter.

**Placement in the narrative arc**: After the photo reel (which lures visually) and before the prose. It gives readers an instant "map" so they can jump straight to "Formation", "Groundwater and Cementation", "Haloclasty Today", "Language Notes", or the visual comparison without losing the easing-in flow.

Add logical ### sub-headings (especially inside ## Deeper Notes) for the most useful jump targets. The current calcarenite article shows the exact pattern of headings and sub-headings to follow.

The ToC component automatically includes a "Visual comparison" link if the ComparisonTabs element has id="visual-comparison".

See `src/components/TableOfContents.astro`, the prose styles in EntryLayout, and `_template.md`.

**Current reference implementation:** `calcarenite-of-the-south-shore.md` (exact headings: Description, Observations, Deeper Notes with subs including Groundwater and Cementation, Language Notes + factual Summary; full ToC + ComparisonTabs + Term usage) + supporting components. Use this article as the visual and structural image for all future rich entries.

Always read this file + `_template.md` before starting a new rich entry. This is how we keep the voice, structure, and visual rhythm (reel → ToC → narrative that eases in and goes deeper → visual comparison) consistent across the log.