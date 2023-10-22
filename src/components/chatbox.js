import './ChatBot.css'; // Import the CSS file
import React, { useState } from 'react';
import Sentiment from 'sentiment';
import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});


import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true
});


const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    // Analyze the sentiment of the user input
    const sentiment = analyzeSentiment(userInput);
    let response;

    if (sentiment.score <= 0) {
      let chatGPTPrompt = "Make this message more friendly whilst being concise: " + userInput;
      const chatCompletion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: chatGPTPrompt }],
        })
        .then((res) => {
          response = res.choices[0].message.content;
        })
        .catch((e) => {
          response = "Revise your feedback response to include more approachable and customer-friendly language"; 
        });
    } else {
      response = "Your input has been identified as neutral/positive. Is there anything else you'd like to discuss?";
    }
    

    // Update the chat log with user input and the response
    setChatLog([...chatLog, { type: 'user', message: userInput }, { type: 'bot', message: response }]);

    // Clear the user input
    setUserInput('');
  };

  // Analyze sentiment using the 'sentiment' library
  const analyzeSentiment = (input) => {
    const sentiment = new Sentiment();
    return sentiment.analyze(input);
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