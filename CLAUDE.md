# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

- **NEVER read or write `.env` or any other file matched by `.gitignore`.** Use `.env.example` to learn which variables exist.

## What this is

A coursework sandbox for the Coursera course "Building with the Claude API". Despite the name, all model calls currently go through **OpenRouter** (`@openrouter/sdk`), not the Anthropic SDK. `@anthropic-ai/sdk` is listed in `package.json` but is not imported anywhere yet.

## Commands

```bash
npm install
node index.js
```

- Requires `OPENROUTER_API_KEY` in `.env` (copy from `.env.example`). `.env` is gitignored.
- There is no build, lint, or test tooling. `npm test` is the npm placeholder and always fails.
- The `test_*.js` files are **not** automated tests — they are runnable example scenarios. To run one, edit `index.js` and uncomment the desired call (only `testStream` is active by default); none of them can be run standalone because they expect the `openrouter` client as an argument.

## Architecture

- ES modules (`"type": "module"`), Node 18+.
- `index.js` loads `.env`, constructs a single `OpenRouter` client, and passes it into whichever `test_*.js` scenario is uncommented.
- `utility.js` holds all model-calling code:
  - `addUserMessage` / `addAssistantMessage` mutate a plain `messages` array in place — conversation history is managed manually by the caller, appending each assistant reply before the next user turn.
  - `chat(openrouter, messages, instructions)` uses `openrouter.chat.send` with `stream: true`, echoes tokens to stdout, logs reasoning-token usage from the final chunk, and returns the full text. The system prompt is passed via `instructions`, defaulting to `"You are a helpful assistant."` when omitted — so it must be re-passed on every call to persist (see `test_system_instructions.js`, where the second call drops it).
  - `stream(openrouter, message)` uses the higher-level `openrouter.callModel(...).getTextStream()` API for a single prompt.
- The model ID (`nvidia/nemotron-3.5-super-vl:free`) is hard-coded separately in both `chat` and `stream`; change both when switching models.
