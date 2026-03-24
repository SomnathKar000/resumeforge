# ResumeForge — Setup Guide

> Everything you need to get this project running on your local machine.

---

## Prerequisites

Make sure you have these installed before starting:

| Tool    | Version       | Check           |
| ------- | ------------- | --------------- |
| Node.js | v18 or higher | `node -v`       |
| npm     | v8 or higher  | `npm -v`        |
| Git     | Any           | `git --version` |

You also need:

- An **Anthropic API key** → [console.anthropic.com](https://console.anthropic.com)

---

## 1. Clone the Repo

```bash
git clone https://github.com/SomnathKar000/ResumeForge.git
cd ResumeForge
```

---

## 2. Install Dependencies

From the root folder, run:

```bash
npm install
```

This installs dependencies for both `apps/web` and `apps/server` using npm workspaces.

If you want to install separately:

```bash
# Frontend
cd apps/web && npm install

# Backend
cd apps/server && npm install
```

---

## 3. Environment Variables

### Backend — `apps/server/.env`

```env
PORT=4000
ANTHROPIC_API_KEY=your_claude_api_key_here
```

### Frontend — `apps/web/.env`

```env
VITE_API_URL=http://localhost:4000
```

> ⚠️ Never commit `.env` files to git. They are already in `.gitignore`.

---

## 4. Run the Project

### Run both apps together (from root)

```bash
npm run dev
```

### Run separately

```bash
# Terminal 1 — Backend
cd apps/server && npm run dev

# Terminal 2 — Frontend
cd apps/web && npm run dev
```

| App      | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:4000 |

---

## 5. Test the API

You can test the backend directly using curl or Postman:

```bash
curl -X POST http://localhost:5000/api/generate \
  -F "resume=@/path/to/your/resume.pdf" \
  -F "jobDescription=We are looking for a frontend developer with React experience..."
```

Expected response → a PDF file download.

---

## 6. Build for Production

```bash
# From root
npm run build
```

Or separately:

```bash
cd apps/web && npm run build      # outputs to apps/web/dist
cd apps/server && npm run build   # outputs to apps/server/dist
```

---

## Folder Reference

```bash
ResumeForge/
├── apps/
│   ├── web/        → React frontend
│   └── server/     → Express backend
├── docs/
│   ├── architecture.md   → How everything works
│   └── setup.md          → This file
├── .gitignore
├── README.md
└── package.json
```

---

## Common Issues

### `ANTHROPIC_API_KEY` not working

- Make sure the key is inside `apps/server/.env` not root `.env`
- Restart the server after adding env vars

### Puppeteer not working

- Puppeteer downloads its own Chrome on install
- If it fails, run: `npx puppeteer browsers install chrome`

### Port already in use

- Change `PORT` in `apps/server/.env` to another port like `5001`
- Update `VITE_API_URL` in `apps/web/.env` to match

### File upload not working

- Make sure the file is `.pdf` or `.docx`
- Max file size is **5MB**

---

## Scripts Reference

### Root

```bash
npm run dev      # Start both apps
npm run build    # Build both apps
```

### apps/server

```bash
npm run dev      # Start with ts-node (hot reload)
npm run build    # Compile TypeScript
npm run start    # Run compiled JS
```

### apps/web

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```
