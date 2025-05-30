const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Sandbox Home Page');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
