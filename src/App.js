import React from 'react';
import './App.css';
import TableauViz from './components/TableauViz.js';
import TableauViz2 from './components/TableauViz2';
import ChatBot from './components/chatbox.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }


// function Menu() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Select company
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item>Amazon</Dropdown.Item>
//         <Dropdown.Item>Google</Dropdown.Item>
//         <Dropdown.Item>Something</Dropdown.Item>
//         <Dropdown.Item>Something</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Company">
      <Dropdown.Item>Amazon</Dropdown.Item>
      <Dropdown.Item>Google</Dropdown.Item>
      <Dropdown.Item>Something</Dropdown.Item>
    </DropdownButton>
  );
}

function App() {
  return (
    <div className="App">
      <div className='maincomponent'>
        <h1 className="header">Welcome to Sentix</h1>
        <p className="caption">Sentix is an all-in-one platform that visualizes and facilitates the ever-evolving relationship </p>
        <p className="caption">between companies and valued customers.</p>
        <BasicButtonExample/>
        <h2 className='emptyspace'> </h2>
      </div>
      <div className="secondcomponent">
        <ChatBot />
        <h2 className='subheaders'>Customer Response Analysis</h2>
        <TableauViz />
        <TableauViz2 />
      </div>
    </div>
  );
}


export default App;

