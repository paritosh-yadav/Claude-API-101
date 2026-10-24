import { chat } from "./utility.js";
import { addUserMessage, addAssistantMessage } from "./utility.js";

const testSystemInstructions = async (openrouter) => {
  const messages = [];
  const systemInstructions =
    "You are a High school teacher, so keep the langauge simple and easy to understand.";
  addUserMessage(messages, "Explain the equation x^2 + 5x + 6 = 0");

  let answer = await chat(openrouter, messages, systemInstructions);
  addAssistantMessage(messages, answer);

  addUserMessage(messages, "What is the quadratic formula?");

  answer = await chat(openrouter, messages);
  addAssistantMessage(messages, answer);

  console.log("\nFinal messages:", messages);
};

export default testSystemInstructions;
