import logo from './logo.svg';
import './App.css';
import TextTest from './components/TextTest';
import Var from './components/Var';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br />
        <TextTest  text={"TITULO 1"} id={1} classComponent={"class-title"}/>
        <TextTest  text={"TITULO 2"} id={2} classComponent={"class-modificar"}/>

        <br />

        <Var key={1} key2={2} />

        
      </header>
    </div>
  );
}

export default App;
