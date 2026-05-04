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

app.post("/generate", async (req, res) => {
  const { name, skills, experience, education } = req.body;

  try {
    console.log("Incoming data:", req.body);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create a professional resume for:
            Name: ${name}
            Skills: ${skills}
            Experience: ${experience}
            Education: ${education}`
        }
      ],
    });

    console.log("AI RESPONSE:", response);

    res.json({ result: response.choices[0].message.content });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));