import React, { useState, useEffect } from 'react';
import Sentiment from 'sentiment';
import './App.css';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function InputChatBox() {
  return (
    <form>
      <input type="text" id="input"></input>
      var Sentiment = require('sentiment');
      var sentiment = new Sentiment();
      var fixed = sentiment.analyze(response);
      console.dir(fixed); 
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to CustomerSupports Support</h1>
      <InputChatBox/>
    </div>
  );
}

export default App;
