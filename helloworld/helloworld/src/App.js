import './App.css';
import React from 'react';
import logo from './Bl logo.png';

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
    userName: ''
    }
  }

  // onClick function
  onClick = ($event) => {
    console.log('save button is clicked', $event);
    window.open(this.url, "_blank");
  }

  onNameChnage = (event) => {
    console.log("value is ", event.target.value);
    // set the title using setState method
    this.setState({ userName: event.target.value })
  }

  render() {
    return (
      <>
      <div>
        <h1>{this.state.userName}</h1>
        <img src={logo} onClick={this.onClick}
          alt="This Bridgelabz logo: a Bridge to Employment through lab works" />
      </div>
      <div>
        <input onChange={this.onNameChnage}/>
      </div>
      </>
    );
  }
}

export default App;