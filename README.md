# AI Resume Builder

A sleek, AI-powered resume builder that generates a professional, print-ready resume from your personal details — in seconds. Built with React on the frontend and a Node.js backend powered by AI content synthesis.

---

## Live Demo

🌐 **Frontend:** [https://ai-resume-builder-xi-six.vercel.app](https://ai-resume-builder-xi-six.vercel.app)

🔗 **Backend API:** [https://ai-resume-builder-anvx.onrender.com](https://ai-resume-builder-anvx.onrender.com)

---

## Screenshots

### 🏠 Home
![Home Page](assets/resume-screenshot-home.png)

### 📝 Form — Enter Credentials
![Form Page](assets/resume-screenshot-form.png)

### 📄 Result — Resume Preview & Download
![Result Page](assets/resume-screenshot-result.png)

---

## How It Works

1. **Home** — Land on a clean, minimal intro page and click "Start Building →"
2. **Form** — Fill in your name, headline, contact info, skills, experience, and education
3. **Result** — Instantly receive a beautifully formatted, AI-enhanced resume ready to download as PDF

---

## Features

- **AI-Generated Profile Summary** — Sends your details to a backend AI endpoint and synthesizes a polished professional summary
- **Print-to-PDF** — One-click PDF download using the browser's native print API, formatted perfectly to A4
- **Two-Column Resume Layout** — Sidebar with contact, skills & education; main column with AI summary and experience
- **Edit & Regenerate** — Go back and refine your details anytime
- **Minimal, High-End Design** — Space Grotesk + Inter typography, clean black-and-white aesthetic
- **Fully Responsive Form** — Two-column grid layout that adapts to screen size

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React | UI framework |
| React Router DOM | Client-side routing (Home → Form → Result) |
| CSS (Custom) | Styling with CSS variables and print media queries |
| Google Fonts | Space Grotesk + Inter typography |
| Browser Print API | PDF generation via `window.print()` |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| AI Integration | Generates the professional profile summary |
| dotenv | Environment variable management |
| CORS | Cross-origin request handling |

---

## Project Structure

```
ai-resume-builder/
│
├── public/                      # Static assets
│
├── server/                      # Express backend
│   ├── .env                     # Environment variables
│   └── index.js                 # Server entry point & AI endpoint
│
└── src/                         # React frontend
    ├── components/              # Reusable UI components
    ├── pages/
    │   ├── Home.js              # Landing page
    │   ├── Form.js              # User input form
    │   └── Result.js            # Resume preview & PDF download
    ├── App.js                   # Route definitions
    ├── App.css                  # Global styles & print logic
    └── index.js                 # React entry point
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm
- An AI API key (configured in the backend)

---

### 1. Clone the Repository

```bash
git clone https://github.com/NafreesMIM/ai-resume-builder.git
cd ai-resume-builder
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=5000
AI_API_KEY=your_ai_api_key_here
```

Start the backend server:

```bash
node index.js
```

The API will be running at `http://localhost:5000`.

---

### 3. Frontend Setup

```bash
cd ..
npm install
npm start
```

The app will be running at `http://localhost:3000`.

> To point the frontend at your local backend, update the fetch URL in `Form.js`:
> ```js
> const res = await fetch("http://localhost:5000/generate", { ... });
> ```

---

## API Endpoint

| Method | Endpoint | Description |
|---|---|---|
| POST | `/generate` | Accepts user details and returns an AI-generated profile summary |

### Request Body

```json
{
  "name": "John Doe",
  "headline": "Lead Web Developer",
  "email": "john@example.com",
  "location": "+94 7... / Colombo",
  "skills": "React, Node.js, Figma",
  "experience": "Worked at...",
  "education": "University / Degree / Year"
}
```

### Response

```json
{
  "result": "AI-generated professional profile summary..."
}
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port for the backend server (default: 5000) |
| `AI_API_KEY` | API key for the AI content generation service |

---

## Roadmap

- [ ] Multiple resume templates
- [ ] User accounts to save and manage resumes
- [ ] Export to DOCX format
- [ ] LinkedIn profile import
- [ ] Cover letter generator

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

- GitHub: [@NafreesMIM](https://github.com/NafreesMIM)
- LinkedIn: [nafrees-mim](https://www.linkedin.com/in/nafrees-mim-475b7728a/)
