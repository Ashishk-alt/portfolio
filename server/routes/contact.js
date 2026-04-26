// server/routes/contact.js
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");

// POST /api/contact  –  Save a new message
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ max: 2000 })
      .withMessage("Message too long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const contact = new Contact(req.body);
      await contact.save();
      res
        .status(201)
        .json({ success: true, message: "Message received! I'll get back to you soon." });
    } catch (err) {
      console.error("Contact save error:", err.message);
      res.status(500).json({ success: false, message: "Server error. Please try again." });
    }
  }
);

// GET /api/contact  –  Retrieve all messages (admin use)
router.get("/", async (_req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
