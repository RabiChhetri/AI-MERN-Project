async function extractJson(text) {
  try {
    if (!text) {
      return null;
    }

    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const firstBrace = cleaned.indexOf("{");
    const lastBrace = cleaned.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1) {
      return null;
    }

    const jsonString = cleaned.slice(firstBrace, lastBrace + 1);

    return JSON.parse(jsonString);
  } catch (error) {
    console.log("JSON Parse Error:", error.message);
    return null;
  }
}

module.exports = { extractJson };