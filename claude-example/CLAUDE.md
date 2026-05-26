# CLAUDE.md

This file is the project rule book. Claude reads it at the start of every session.

## Project Overview

AI boilerplate — a starting point for Claude Code-powered projects.

## Behavior Rules

- Default to no comments in code unless the WHY is non-obvious.
- Prefer editing existing files over creating new ones.
- Do not add error handling for impossible scenarios.
- Do not add features beyond what the task requires.
- Keep responses short and direct.

## Commit Conventions

- Use imperative mood: "add", "fix", "remove", "update"
- One sentence summary; body only when motivation is non-obvious


## Tech Stack

- Runtime: Node.js
- Test runner: Node built-in (`node --test`) or vitest
- Language: JavaScript / TypeScript

## File Conventions

- `specs/` — feature contracts written before implementation
- `tests/` — automated tests
- `.claude/rules/` — path-scoped rules loaded on glob match
- `.claude/hooks/` — deterministic shell hooks triggered on events

## What to Avoid

- Mocking internals in tests that could diverge from production
- Backwards-compatibility shims for removed code
- Explanatory comments that restate what the code already says
