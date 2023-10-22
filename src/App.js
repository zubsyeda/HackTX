import React from 'react';
import './App.css';
import TableauViz from './components/TableauViz.js';
import ChatBot from './components/chatbox.js'; // Adjust the path as needed
import TableauViz2 from './components/TableauViz2';





function App() {
  return (
    <div className="App">
      <h1 className="header">Welcome to Statify</h1>
      <TableauViz />
      <TableauViz2 />
      <ChatBot />
    </div>
  );
}


export default App;

