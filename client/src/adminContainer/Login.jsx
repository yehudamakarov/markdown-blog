import React, { Component } from 'react'
import fakeAuth from './fakeAuth';
import { Redirect } from "react-router-dom";

export default class Login extends Component {
    state = {
        redirectToReferrer: false
      }
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
            redirectToReferrer: true
            })
        })
    }
    render() {
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer === true) {
            return <Redirect to='/admin' />
        }
        return (
          <div>
            <p>Please Login</p>
            <button onClick={this.login}>Login</button>
          </div>
        )
    }
}
