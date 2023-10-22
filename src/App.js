import React from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import PageOne from './components/pageone.js';
import PageTwo from './components/pagetwo.js';
import PageThree from './components/pagethree.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components

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
        <Dropdown.Item href="/pageone">Amazon</Dropdown.Item>
        <Dropdown.Item href="/pagetwo">Google</Dropdown.Item>
        <Dropdown.Item href="/pagethree">Something</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

// function InputChatBox() {
//   return (
//     <form>
//       <input type="text" id="input"></input>
//     </form>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1 className="header">Welcome to ProjectName</h1>
      <Menu/>
        <Router>
          <Routes>
            <Route path="/pageone" element={<PageOne />} />
            <Route path="/pagetwo" element={<PageTwo />} />
            <Route path="/pagethree" element={<PageThree />} />
          </Routes>
        </Router>

    </div>
    
  );
}

export default App;
