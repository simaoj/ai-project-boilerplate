#!/usr/bin/env bash
# Triggered whenever Claude invokes an MCP tool.
# Receives the tool name via MCP_TOOL_NAME env var (set by the harness).
# Use this to log, audit, or gate MCP calls.

set -euo pipefail

TOOL="${MCP_TOOL_NAME:-unknown}"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "[mcp-call] ${TIMESTAMP} tool=${TOOL}" >> .claude/mcp-audit.log
