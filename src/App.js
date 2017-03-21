import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: 12,
};


class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header"><RaisedButton label="Primary" primary={true} style={style} />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>DH Pottery & Glass</h2>
        </div>
        <p className="App-intro">

        </p>
      </div>

   );
  }
}

export default App;
