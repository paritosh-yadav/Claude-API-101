import dotenv from "dotenv";
import { OpenRouter } from "@openrouter/sdk";
import testOpenRouter from "./test_open_router.js";
import testSystemInstructions from "./test_system_instructions.js";

dotenv.config();
const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});
testOpenRouter(openrouter);
// testSystemInstructions(openrouter);
