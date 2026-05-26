// Verifies basic model responses using the Anthropic SDK.
// Run with: node --test tests/basic.spec.js

import { test } from "node:test";
import assert from "node:assert/strict";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

test("model returns a non-empty text response", async () => {
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 64,
    messages: [{ role: "user", content: "Reply with the word PONG only." }],
  });

  const text = message.content.find((b) => b.type === "text")?.text ?? "";
  assert.ok(text.length > 0, "response should contain text");
  assert.match(text, /PONG/i, "response should contain PONG");
});

test("model stop reason is end_turn", async () => {
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 16,
    messages: [{ role: "user", content: "Say hi." }],
  });

  assert.equal(message.stop_reason, "end_turn");
});
