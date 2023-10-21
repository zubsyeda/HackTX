import React from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }


function Menu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select company
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

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
      <Menu/>
      <InputChatBox/>
      <button className="send"><img alt="Send" /></button>
    </div>
  );
}

export default App;
