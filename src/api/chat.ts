import { GoogleGenerativeAI } from "@google/generative-ai";

export async function chat(message: string) {
  try {
    // Get the API key from environment variables
    const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
    
    if (!apiKey) {
      console.error("Google AI API key is not set");
      throw new Error("API key not configured");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `You are a helpful Web3 assistant. Please provide accurate and helpful information about: ${message}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return { response: response.text() };
  } catch (error) {
    console.error("AI API Error:", error);
    throw new Error("Failed to get AI response");
  }
}