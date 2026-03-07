const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/posts',       require('./routes/posts'));
app.use('/api/restaurants', require('./routes/restaurants'));
app.use('/api/contact',     require('./routes/contact'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: "Jesika Food Blog API running!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});