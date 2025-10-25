const express = require('express');
const listsRouter = require('./routes/lists');
const songsRouter = require('./routes/songs');

const app = express();

app.use(express.json());

// health check
app.get('/health', (req, res) => {
  res.json({ ok: true });
});

// feature routes
app.use('/lists', listsRouter);
app.use('/songs', songsRouter);

// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`api running on http://localhost:${PORT}`);
});
