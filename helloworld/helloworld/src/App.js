import './App.css';
import React from 'react';
import logo from './Bl logo.png';
class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      title: 'hello from bridgelabz'
    }
  }

  // onClick function
  onClick = ($event) => {
    console.log('save button is clicked', $event);
    window.open(this.url, "_blank");
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
          alt="This Bridgelabz logo: a Bridge to Employment through lab works" />
      </div>
    );
  }
}

export default App;