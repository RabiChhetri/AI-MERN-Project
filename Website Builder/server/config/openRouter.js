const fetch = require("node-fetch");

const openRouterUrl = "https://openrouter.ai/api/v1/chat/completions";

const model = "deepseek/deepseek-chat";

async function generateResponse(prompt) {
  try {
    const response = await fetch(openRouterUrl, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.OPEN_ROUTER_API}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "AI Website Builder",
      },

      body: JSON.stringify({
        model,

        response_format: {
          type: "json_object",
        },

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.7,
      }),
    });

    const data = await response.json();

    console.log("OPENROUTER RESPONSE:", JSON.stringify(data, null, 2));

    return data?.choices?.[0]?.message?.content || "";
  } catch (error) {
    console.log("OpenRouter Error:", error.message);
    return "";
  }
}

module.exports = { generateResponse };