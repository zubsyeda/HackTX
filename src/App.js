import React from 'react';
import './App.css';
//import Dropdown from './components/dropdown';

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
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select company
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Ask_Spectrum</a>
          <a class="dropdown-item" href="#">AmazonHelp</a>
          <a class="dropdown-item" href="#">AppleSupport</a>
        </div>
      </div>
      <InputChatBox/>
      <button className="send"><img alt="Send" /></button>
    </div>
  );
}

export default App;
