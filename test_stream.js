import { stream } from "./utility.js";

const testStream = async (openrouter) => {
  const message = "Write a short poem about the ocean."
  stream(openrouter, message);
};

export default testStream;
