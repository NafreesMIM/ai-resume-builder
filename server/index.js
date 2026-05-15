import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("AI Resume Backend Running");
});

app.post("/generate", async (req, res) => {
  const {
    name,
    headline,
    email,
    location,
    skills,
    experience,
    education,
  } = req.body;

  try {
    console.log("Processing resume for:", name);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert Resume Writer. Your goal is to take raw user data and transform it into a high-impact, professional resume profile and experience section. Use strong action verbs and professional tone.",
        },
        {
          role: "user",
          content: `
            Please synthesize a professional resume summary and detailed experience bullet points for the following individual:

            Name: ${name}
            Target Role: ${headline}
            Contact: ${email} | ${location}
            Core Skills: ${skills}
            Raw Experience: ${experience}
            Academic Background: ${education}

            Requirements:
            1. Write a compelling 3-4 sentence Professional Summary.
            2. Transform the Raw Experience into 3-5 high-impact bullet points using action verbs.
            3. Do not include references or personal labels.
            4. Keep the tone sophisticated and minimalist.
          `,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    console.log("Synthesis Complete");

    res.json({
      result: response.choices[0].message.content,
    });

  } catch (error) {
    console.error("OPENAI_ERROR:", error);

    res.status(500).json({
      error: "Failed to communicate with AI Engine",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);