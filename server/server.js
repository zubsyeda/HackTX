// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Define a route for handling requests to your ChatGPT API
app.post('/chatgpt', async (req, res) => {
  try {
    const apiKey = 'YOUR_CHATGPT_API_KEY'; // Replace with your ChatGPT API key
    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'; // Replace with your ChatGPT API endpoint

    const userMessage = req.body.message;

    const response = await axios.post(apiUrl, {
      prompt: userMessage,
      max_tokens: 50, // Adjust as needed
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    const chatResponse = response.data.choices[0].text;
    res.json({ response: chatResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json('An error occurred while fetching the response from ChatGPT.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

