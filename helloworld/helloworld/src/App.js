import './App.css';
import React from 'react';
import logo from './Bl logo.png';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      title: 'hello from bridgelabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo}
          alt="This Bridgelabz logo: a Bridge to Employment through lab works" />
      </div>
    );
  }
}

export default App;