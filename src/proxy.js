const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000; // Choose any available port for your proxy server

app.use(express.json());

app.post('/api/login', async (req, res) => {
  try {
    const response = await fetch('https://strategnosportal.co.za/api/TokenAuth/Authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
