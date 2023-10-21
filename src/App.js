import React from 'react';
import './App.css';
import Dropdown from './components/dropdown';

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

function InputChatBox() {
  return (
    <form>
      <input type="text" id="input"></input>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="header">Welcome to ProjectName</h1>
      <Dropdown />
      <InputChatBox/>
      <button className="send"><img alt="Send" /></button>
    </div>
  );
}

export default App;
