import React, { useState } from 'react';
import Sentiment from 'sentiment';

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
      // Generate a response for negative sentiment
      response = "Revise your feedback response to include more approachable and customer-friendly language";
    } else {
      // Provide a different response for positive sentiment or neutral input
      response = "Thank you for your input. Is there anything else you'd like to discuss?";
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
