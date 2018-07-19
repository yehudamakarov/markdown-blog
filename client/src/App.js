import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  handleClick = () => {
    // fetch('/login', {
    //   credentials: 'include',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "email": "abc",
    //     "password": "123"
    //   })
    // }).then((resp) => {
    //   return resp.json()
    // }).then((json) => {
    //   console.log(json)
    // })
    axios.post('/login', {
      email: "abc",
      password: "123"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleOtherClick = () => {
    axios.get('/sessiontest')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>LOGIN</button>
        <button onClick={this.handleOtherClick}>GetSessionTest</button>
      </div>
    );
  }
}

export default App;
