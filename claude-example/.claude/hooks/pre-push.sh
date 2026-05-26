#!/usr/bin/env bash
# Runs type checks and tests before every push.
# Claude Code executes this deterministically on the PreToolUse(Bash) push event.

set -euo pipefail

echo "==> Pre-push: type check"
if [ -f "tsconfig.json" ]; then
  npx tsc --noEmit
fi

echo "==> Pre-push: tests"
if [ -f "package.json" ]; then
  npm test
fi

echo "==> Pre-push: passed"
