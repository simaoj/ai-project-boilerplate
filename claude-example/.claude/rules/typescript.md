# Rules: TypeScript files

Applies to: **/*.ts, **/*.tsx

- Prefer `type` over `interface` unless declaration merging is needed.
- No `any`. Use `unknown` and narrow.
- Avoid non-null assertions (`!`); handle nulls explicitly.
- Export types alongside the functions that use them.
