# INDEX.md — Project Map

Quick orientation for Claude and humans alike.

## Structure

```
ai-boilerplate/
├── CLAUDE.md              # Project rules — Claude reads this first
├── CLAUDE.local.md        # Personal overrides — gitignored
├── .claude/
│   ├── hooks/
│   │   ├── pre-push.sh        # Type check + test gate before push
│   │   └── on-mcp-call.sh     # Audit log for every MCP tool call
│   ├── output-styles/
│   │   └── writing.md         # Response style rules (concise, no filler)
│   ├── rules/
│   │   └── typescript.md      # Glob-scoped rules for TS files
│   ├── settings.json          # Shared permissions + hooks config
│   └── settings.local.json    # Personal permissions — gitignored
├── specs/
│   └── feature.md             # Feature spec template
├── tests/
│   └── basic.spec.js          # Smoke tests against the Anthropic API
└── INDEX.md                   # This file
```

## Key Decisions

- **specs/ before code** — write the feature contract first, implement second.
- **hooks are deterministic** — they run on every matching event, not on Claude's judgment.
- **settings.local.json is gitignored** — personal allow-lists never leak to CI.
