import React, { Component } from 'react';

import Smurfs from './Smurfs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      Hello World
      <Smurfs smurfsArray={this.props.smurfsArray}/>
      </div>
    );
  }
}

export default App;
