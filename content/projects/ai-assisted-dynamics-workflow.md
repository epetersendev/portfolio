---
title: An AI-assisted development workflow for Dynamics 365
client: Altai Systems — client Dynamics 365 platforms
summary: A Claude Code workflow for real Dynamics 365 work, with repository agent instructions, a plan-review-apply process for schema changes, and lint, test, and build gates on every change.
role: Designer and daily user of the workflow
platform: [Claude Code, TypeScript, Jest, Dynamics 365, Dataverse]
order: 2
---

## The problem

AI coding agents are fast, but on a live CRM platform "looks right" is not good enough. A guessed
field name or an unreviewed schema change can break forms for thousands of users.

## How it works

- **Repository agent instructions** spell out the rules: read the existing form and script first,
  check every field, tab, and option set name against solution metadata, and stop and ask when a
  name is missing instead of guessing.
- **Schema changes go through plan, review, then apply.** New columns are written as a spec, the
  tool shows a plan, and nothing is applied until a human approves it, and then only to the
  development environment.
- **Every change passes lint, unit tests, and a build** before it can become a pull request.
  Tests cover each form handler, including the missing-field path.
- **Conventions are enforced, not suggested:** typed Xrm APIs, constants instead of magic strings,
  null checks on every control, and small single-purpose handlers.

## Why it matters

The agent does the typing; the workflow makes its output trustworthy. Reviews focus on
judgment, not on catching typos, and changes ship faster without lowering the bar.
