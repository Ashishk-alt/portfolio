// ============================================================
// server/index.js  –  Express + MongoDB backend
// ============================================================
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ──────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json());

// ─── Routes ─────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);

// Health-check
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// ─── MongoDB ─────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/portfolio")
  .then(() => {
    console.log("✅  MongoDB connected");
    app.listen(PORT, () => console.log(`🚀  Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌  MongoDB connection error:", err.message);
    // Start server even without DB so frontend can still run
    app.listen(PORT, () =>
      console.log(`⚠️  Server running WITHOUT DB on port ${PORT}`)
    );
  });
