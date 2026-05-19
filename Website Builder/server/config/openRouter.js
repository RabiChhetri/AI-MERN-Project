const openRouterUrl = "https://openrouter.ai/api/v1/chat/completions";

const model = "deepseek/deepseek-chat";

const generateResponse = async (prompt) => {
  try {
    const response = await fetch(openRouterUrl, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.OPEN_ROUTER_API}`,
        "HTTP-Referer": "http://localhost:5173",
        "X-OpenRouter-Title": "GenWeb AI",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: model,

        messages: [
            {role:"system",content:"You must return only valid raw "},
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
      }),
    });
    if (!response.ok) {
      const err=await response.json()
      throw new Error(`OpenRouter API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  } 
};

module.exports = { generateResponse };