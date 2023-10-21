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
