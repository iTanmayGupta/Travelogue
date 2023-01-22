import logo from './logo.svg';
import axios from "axios"
import './App.css';
import SearchCont from './SearchBar'
import ItenaryCont from './ItenaryCont'

function App() {
  
  return (
    <div className="App">
      <div className="SearchBarHolder">
        <SearchCont/>
      </div>
      <div className="CardsHolder">
        <div className="ICText1"> 
        Your Itineraries
        </div>
        <ItenaryCont></ItenaryCont>
      </div>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
