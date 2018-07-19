import React, { Component } from 'react'
import axios from 'axios';

export default class TestLoginButton extends Component {
    handleLogin = () => {
        axios.post('/login', {
          email: "abc",
          password: "12"
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log('ran error catch.');
          console.log('error :', error);
        });
    }
  render() {
    return (
      <div>
        <button onClick={this.handleLogin} >Test Login</button>
      </div>
    )
  }
}
