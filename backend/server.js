const express = require('express');
const listsRouter = require('./api/routes/lists');
const songsRouter = require('./api/routes/songs');

const app = express();

// health check
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

// feature routes
app.use('/api/lists', listsRouter);
app.use('/api/songs', songsRouter);

// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`api running on http://localhost:${PORT}`);
});
