---
title: Rebuilding a Next.js site as an editor-friendly WordPress theme
client: Professional Association for Industrial Distribution (PAID), Texas A&M University
summary: Converted a Next.js design into a custom WordPress theme with structured ACF content, then migrated and cleaned up all content from the organization's old WordPress site.
role: Lead developer — theme build, content model, and migration
platform: [WordPress, PHP, Advanced Custom Fields, Next.js]
year: "2026"
url: https://paid.tamu.edu/
order: 1
---

![The PAID home page](/paid-home.jpg)

## The challenge

The organization had a new site design built in Next.js, but their team needed to keep
managing content themselves in WordPress, the platform they already knew. The content they
needed also lived on an older WordPress site that had to be carried forward.

## What I built

- **A custom WordPress theme in PHP** that reproduces the Next.js design faithfully, page
  template by page template.
- **A structured content model with Advanced Custom Fields**, so editors fill in clear fields
  instead of fighting layout markup, and pages stay consistent with the design.
- **A content migration** from the old WordPress site using a migration plugin, followed by a
  hands-on cleanup pass to fix formatting, media, and links so everything rendered correctly in
  the new templates.

## Key decisions

- **WordPress over keeping Next.js.** The deciding factor was who maintains the site day to
  day. A traditional WordPress theme gives non-technical editors full control without a
  developer in the loop.
- **ACF fields over free-form page content.** Structured fields keep the design intact no matter
  who edits a page, and make future redesigns easier because content is separate from
  presentation.
- **Automated migration plus manual review.** The plugin moved the bulk of the content quickly;
  the manual pass caught the formatting and media issues automation misses.

## Outcome

- **About 50 pages and posts** migrated from the old site to the new theme.
- **Staff manage the site themselves** in WordPress, without a developer in the loop.
- **The new design launched in 2026** at [paid.tamu.edu](https://paid.tamu.edu/).
