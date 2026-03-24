# ResumeForge — Architecture

> A simple breakdown of how the project is structured and how everything connects.

---

## Overview

ResumeForge is split into two apps:

| App           | What it is                      |
| ------------- | ------------------------------- |
| `apps/web`    | The frontend — React + Tailwind |
| `apps/server` | The backend — Node.js + Express |

The frontend talks to the backend via one API call.
The backend does all the heavy lifting — parsing, AI, PDF generation.

---

## High-Level Flow

```bash
User (Browser)
    ↓
  Uploads resume (PDF/DOCX) + pastes job description
    ↓
apps/web (React)
    ↓
  POST /api/generate  →  apps/server (Express)
                              ↓
                        Parse resume text
                        (pdf-parse / mammoth)
                              ↓
                        Send to Claude AI
                        (resume text + job description)
                              ↓
                        Claude returns structured JSON
                        (summary, skills, experience, etc.)
                              ↓
                        Inject JSON into HTML template
                              ↓
                        Convert HTML → PDF (Puppeteer)
                              ↓
  ← Returns PDF buffer ←────────────────────────────
    ↓
User downloads the tailored resume
```

---

## Frontend Architecture (`apps/web`)

```bash
pages/
  Home.tsx         →  Main page — upload form + JD input
  Result.tsx       →  Shows download button after generation

components/
  ResumeUploader   →  File input for PDF/DOCX
  JDInput          →  Textarea for job description
  DownloadCard     →  Download button + success state

hooks/
  useResumeGen     →  Manages loading state, API call, error handling

services/
  api.ts           →  Single function that calls POST /api/generate
```

**Data flow in frontend:**

```bash
User fills form
  ↓
useResumeGen hook is triggered
  ↓
api.ts sends FormData to backend
  ↓
Response (PDF blob) is converted to a download link
  ↓
User clicks download
```

---

## Backend Architecture (`apps/server`)

```bash
routes/
  resume.route.ts      →  Defines POST /api/generate endpoint

middlewares/
  upload.middleware.ts  →  Multer — handles file upload, validates type/size

services/
  parse.service.ts     →  Reads PDF or DOCX → returns plain text string
  claude.service.ts    →  Sends text + JD to Claude → returns JSON
  template.service.ts  →  Fills resume HTML template with JSON data
  pdf.service.ts       →  Puppeteer converts HTML string → PDF buffer

prompts/
  tailor.prompt.ts     →  The Claude system prompt + user prompt builder

templates/
  resume.template.html →  ATS-friendly HTML layout for the final resume
```

**Data flow in backend:**

```bash
POST /api/generate
  ↓
multer saves file to memory (buffer)
  ↓
parse.service → extract raw text from buffer
  ↓
claude.service → build prompt → call API → parse JSON response
  ↓
template.service → inject JSON into HTML template
  ↓
pdf.service → puppeteer renders HTML → returns PDF buffer
  ↓
res.send(pdfBuffer) with content-type: application/pdf
```

---

## Claude AI — What it receives and returns

**Input (sent to Claude):**

```bash
- Raw resume text (extracted from PDF/DOCX)
- Job description (pasted by user)
```

**Output (Claude returns JSON):**

```json
{
  "name": "John Doe",
  "email": "john@email.com",
  "phone": "+91 9999999999",
  "summary": "Rewritten summary tailored to the JD...",
  "skills": ["React", "TypeScript", "Node.js"],
  "experience": [
    {
      "company": "ABC Corp",
      "role": "Frontend Developer",
      "duration": "2022 - Present",
      "bullets": ["Rewrote bullet to match JD keywords...", "..."]
    }
  ],
  "education": [
    {
      "degree": "B.Tech in Computer Science",
      "college": "XYZ University",
      "year": "2023"
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "Rewritten to highlight relevant skills..."
    }
  ]
}
```

---

## Communication Between Apps

```bash
Frontend                          Backend
   |                                 |
   |  POST /api/generate             |
   |  Content-Type: multipart/form-data
   |  Body: { resume: File, jobDescription: string }
   | ──────────────────────────────► |
   |                                 |
   |  Response: PDF binary (blob)    |
   | ◄────────────────────────────── |
```

---

## Key Design Decisions

| Decision                   | Reason                                                     |
| -------------------------- | ---------------------------------------------------------- |
| Monorepo structure         | Both apps in one repo — easier to manage solo              |
| Puppeteer for PDF          | Full control over resume styling + layout                  |
| Claude returns JSON        | Easy to inject into HTML template reliably                 |
| Multer memory storage      | No temp files on disk — faster and cleaner                 |
| Prompts in separate folder | Easy to update/tweak AI behavior without touching services |
