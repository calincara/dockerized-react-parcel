const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello there!');
});

app.get('/kenobi', (req, res) => {
    res.send('General Kenobi!');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});