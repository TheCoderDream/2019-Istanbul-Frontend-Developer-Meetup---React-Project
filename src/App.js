import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";
import DateAddress from "./containers/date-address/Date-Adress";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <DateAddress/>
      </div>
    );
  }
}

export default App;
