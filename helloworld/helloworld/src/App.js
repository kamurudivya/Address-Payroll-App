import './App.css';
import React from 'react';
import logo from './Bl logo.png';

class App extends React.Component {
  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      userName: '',
      nameError: ''
    }
  }

  // onClick function
  onClick = ($event) => {
    console.log('save button is clicked', $event);
    window.open(this.url, "_blank");
  }

  onNameChnage = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    // set the title using setState method
    this.setState({ userName: event.target.value })
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: '' })
    } else {
      this.setState({ nameError: 'Name is Incorrect' })
    }
  }

  render() {
    return (
      <>
        <html>
          <body>
            <div className="container">
              <div className="main-container">
                <div className="header">
                  <h1>Hello {this.state.userName} from Bridgelabz</h1>
                </div>
                <div>
                  <img src={logo} onClick={this.onClick}
                    alt="This Bridgelabz logo: a Bridge to Employment through lab works" />
                  <input onChange={this.onNameChnage} />
                </div>
                <span className="error-output">{this.state.nameError}</span>
                <div>
                  <p>At BridgeLabz, we're a community of </p>
                  <ul>
                    <li>Technoligist</li>
                    <li>Thinkers</li>
                    <li>Builders</li>
                  </ul>
                  <p>
                    Working together to keep Tech employability of enginners alive and
                    accesible so tech comanies worldwide
                    get contributors and creators for technology solutions.
                    We believe this act of human collaboration acrosss an employability
                    platform is essential to individual growth and our collective future
                  </p>
                  <p>
                    To know about us , visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
                    to learn even more about out mission i.e. <strong>Employability to all</strong>
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      </>
    );
  }
}

export default App;