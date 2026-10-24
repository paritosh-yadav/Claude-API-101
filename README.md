# Claude API 101

A small Node.js project for experimenting with large language model APIs via OpenRouter, based on the Coursera course "Building with the Claude API".

## Overview

This repository demonstrates how to:

- configure an API key with environment variables
- connect to an OpenRouter-compatible model endpoint
- send a conversation history to a chat model
- stream responses and inspect usage metadata
- build simple LLM interactions in JavaScript

## Project structure

- `index.js` – application entry point
- `utility.js` – reusable chat helpers for adding messages and calling the model
- `test_open_router.js` – sample conversation flow
- `.env.example` – sample environment configuration

## Prerequisites

- Node.js 18+
- npm
- An OpenRouter API key

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your OpenRouter key:

   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

## Run the example

```bash
node index.js
```

This will initialize the OpenRouter client, send a short multi-turn conversation, and print the generated responses.

## Notes

- The project uses the OpenRouter SDK with a chat model configured in `utility.js`.
- The current example is a lightweight learning app and is intended for experimentation and coursework.
- For production usage, consider validation, error handling, request retries, and secure secret management.
