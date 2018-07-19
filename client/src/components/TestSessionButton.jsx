import React, { Component } from 'react'
import axios from 'axios';

export default class TestLoginButton extends Component {
    sessionTest = () => {
        axios.get('/sessiontest')
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
        <button onClick={this.sessionTest} >Test Session</button>
      </div>
    )
  }
}
