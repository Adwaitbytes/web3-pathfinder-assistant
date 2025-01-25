import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
  const { message } = await request.json();
  
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `You are a helpful Web3 assistant. Please provide accurate and helpful information about: ${message}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return new Response(JSON.stringify({ response: response.text() }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("AI API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to get AI response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}