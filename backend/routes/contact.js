const express = require('express');
const router = express.Router();
const messages = [];

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message are required' });
  const entry = { id: Date.now(), name, email, subject: subject || 'General', message, date: new Date().toISOString() };
  messages.push(entry);
  res.status(201).json({ success: true, message: "Thanks for reaching out! I'll reply soon." });
});

router.get('/', (req, res) => res.json(messages));

module.exports = router;