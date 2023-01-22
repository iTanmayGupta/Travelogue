import logo from './logo.svg';
import axios from "axios"
import './App.css';
import SearchCont from './SearchBar'
import ItenaryCont from './ItenaryCont'
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      response : "",
      img: ""
    }
  }

  handleCardCreation = (r) => {
    console.log("in app area")
    console.log(r)
    this.setState({response:r})
  }

  handleImgCreation = (r) => {
    console.log("in app area")
    console.log(r)
    this.setState({img:r})
  }

  render(){
  return (
    <div className="App">
      <div className="SearchBarHolder">
        <SearchCont response={this.state.response} handleCardCreation={this.handleCardCreation} handleImgCreation={this.handleImgCreation}/>
      </div>
      <div className="CardsHolder">
        <div className="ICText1"> 
        Your Itineraries
        </div>
        <ItenaryCont response = {this.state.response} img = {this.state.img}></ItenaryCont>
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
}

export default App;
