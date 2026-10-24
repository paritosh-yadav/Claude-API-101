const addUserMessage = (messages, text) => {
  messages.push({ role: "user", content: text });
};
const addAssistantMessage = (messages, text) => {
  messages.push({ role: "assistant", content: text });
};
const chat = async (openrouter, messages, instructions) => {
  // Stream the response to get reasoning tokens in usage
  const stream = await openrouter.chat.send({
    chatRequest: {
      model: "nvidia/nemotron-3.5-super-vl:free",
      instructions: instructions || "You are a helpful assistant.",
      messages: messages,
      max_tokens: 1024,
      stream: true,
    },
  });
  let response = "";
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      response += content;
      process.stdout.write(content);
    }

    // Usage information comes in the final chunk
    if (chunk.usage) {
      console.log(
        "\nReasoning tokens:",
        chunk.usage.completionTokensDetails?.reasoningTokens,
      );
    }
  }

  return response;
};
export { addUserMessage, addAssistantMessage, chat };
