import { chat } from "./utility.js";
import { addUserMessage, addAssistantMessage } from "./utility.js";

const testOpenRouter = async (openrouter) => {
  const messages = [];

  addUserMessage(messages, "Define quantum computing in one sentence.");

  let answer = await chat(openrouter, messages);
  addAssistantMessage(messages, answer);

  addUserMessage(messages, "Write another sentence about quantum computing.");

  answer = await chat(openrouter, messages);
  addAssistantMessage(messages, answer);

  console.log("\nFinal messages:", messages);
};

export default testOpenRouter;
