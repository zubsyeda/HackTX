import React, { useState } from 'react';
import axios from 'axios';
import Sentiment from 'sentiment';

function InputChatBox() {
    return (
      <form>
        <input type="text" id="input"></input>
      </form>
    );
  }
  
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



  // 3. Perform sentiment analysis and transformation
  const transformResponse = async (response) => {
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var score = sentiment.analyze(response);
    if (score <= 0) {
        // response is too negative
    }

    return response;
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
