import React, { useState } from 'react';
import axios from 'axios';
import Sentiment from 'sentiment';

const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    // 1. Send user input to the ChatGPT API
    const chatResponse = await sendToChatGPT(userInput);
    const transformedResponse = await transformResponse(chatResponse);

    // 4. Update the chat log with user input and the model's response
    setChatLog([...chatLog, { type: 'user', message: userInput }, { type: 'bot', message: transformedResponse }]);

    // 5. Clear the user input
    setUserInput('');
  };

  // 2. Send user input to the ChatGPT API
  const sendToChatGPT = async (input) => {
    const response = await axios.post('/your-chatgpt-api-endpoint', {
      userMessage: input,
    });
    return response.data;
  };

  // 3. Perform sentiment analysis and transformation
  const transformResponse = async (response) => {
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var score = sentiment.analyze(response);
    if (score <= 0) {
        // output positive response using chatgpt api
        const positiveResponse = await generatePositiveResponse(response);

        response = positiveResponse;
    }

    return response;
  };

  const generatePositiveResponse = async (input) => {
    // Replace with your ChatGPT API endpoint and API key
    const chatGptApiUrl = 'YOUR_CHATGPT_API_ENDPOINT';
    const apiKey = 'YOUR_API_KEY';
  
    try {
      const response = await axios.post(chatGptApiUrl, {
        prompt: `Transform this negative message into a positive one: ${input}`,
      }, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
  
      return response.data.choices[0].text;
    } catch (error) {
      console.error(error);
      return "I'm glad you're here! How can I assist you today?";
    }
  };

  return (
    <div>
      <div className="chat-log">
        {chatLog.map((item, index) => (
          <div key={index} className={`message ${item.type}`}>
            {item.message}
          </div>
        ))}
      </div>
      <input type="text" value={userInput} onChange={handleUserInput} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;
