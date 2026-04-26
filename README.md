# 🚀 Ashish Kumar – Developer Portfolio

A modern, fully responsive personal portfolio website built with:
- **Frontend**: React.js + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (contact form messages)

---

## 📁 Folder Structure

```
portfolio/
├── client/                   # React frontend
│   ├── public/
│   │   └── index.html        # SEO-optimised HTML shell
│   ├── src/
│   │   ├── components/       # All UI sections
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── resume.js     # ← All content lives here
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                   # Express backend
│   ├── models/
│   │   └── Contact.js        # Mongoose schema
│   ├── routes/
│   │   └── contact.js        # REST API routes
│   ├── index.js              # App entry point
│   ├── .env.example
│   └── package.json
│
├── package.json              # Root scripts
└── README.md
```

---

## ⚡ Quick Start

### 1. Clone / unzip the project

```bash
cd portfolio
```

### 2. Install dependencies

```bash
# From the root
npm install           # installs concurrently
cd server && npm install
cd ../client && npm install
```

Or use the convenience script:

```bash
npm run install:all
```

### 3. Configure environment variables

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
```

> 💡 If you don't have MongoDB locally, use a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster and replace `MONGO_URI` with your connection string.

### 4. Run in development

```bash
# From the root — starts both servers with hot reload
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

---

## 🔧 Customisation

All your personal content is in **one file**: `client/src/data/resume.js`

Update:
- `personal` object → name, email, phone, social links, about text
- `education` array → your academic history
- `skills` object → skill categories and items
- `projects` array → project cards
- `experience` array → work/internship entries
- `certifications` → your certs
- `achievements` → awards & extra-curricular

---

## 🌐 API Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| POST   | /api/contact    | Submit contact form      |
| GET    | /api/contact    | List all messages (admin)|
| GET    | /api/health     | Health check             |

### Sample POST body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Collaboration",
  "message": "Hey, let's work together!"
}
```

---

## 🏗️ Production Build

```bash
npm run build         # builds React into client/build/
```

Then serve `client/build` with the Express server by adding:
```js
// server/index.js
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (_, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));
```

---

## ✨ Features

- [x] Dark / light mode toggle (persists to OS preference)
- [x] Scroll progress indicator
- [x] Typewriter hero animation
- [x] Staggered reveal animations on scroll
- [x] Sticky responsive navbar with active section highlight
- [x] Contact form with MongoDB storage
- [x] SEO-friendly meta tags
- [x] Mobile-first responsive design
- [x] Download CV button
- [x] Project hover effects
