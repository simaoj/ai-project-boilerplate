// Smoke tests for GitHub Models using the OpenAI SDK.
// Run with: node --test tests/basic.spec.js

import { test } from "node:test";
import assert from "node:assert/strict";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GITHUB_TOKEN,
  baseURL: "https://models.inference.ai.azure.com",
});

const model = process.env.MODEL || "gpt-4o-mini";

test("model returns non-empty text", async () => {
  const completion = await client.chat.completions.create({
    model,
    messages: [{ role: "user", content: "Reply with the word PONG only." }],
    max_tokens: 32,
  });

  const text = completion.choices?.[0]?.message?.content || "";
  assert.ok(text.length > 0, "response should contain text");
  assert.match(text, /PONG/i, "response should contain PONG");
});

test("model provides a finish reason", async () => {
  const completion = await client.chat.completions.create({
    model,
    messages: [{ role: "user", content: "Say hi." }],
    max_tokens: 16,
  });

  const finishReason = completion.choices?.[0]?.finish_reason;
  assert.ok(finishReason, "finish reason should be present");
});
