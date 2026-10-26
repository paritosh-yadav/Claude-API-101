import dotenv from "dotenv";
import { OpenRouter } from "@openrouter/sdk";
import testOpenRouter from "./test_open_router.js";
import testSystemInstructions from "./test_system_instructions.js";
import testStream from "./test_stream.js";

dotenv.config();
console.log('process.env.OPENROUTER_API_KEY', process.env.OPENROUTER_API_KEY)
// const openrouter = new OpenRouter({
//   apiKey: process.env.OPENROUTER_API_KEY,
// });
// testOpenRouter(openrouter);
// testSystemInstructions(openrouter);
// testStream(openrouter);
