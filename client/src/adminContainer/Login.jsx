import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { loginAction } from '../store/actions/loginAction';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    onChange = ({ target }) => {
        this.setState(
            {
                [target.name]: target.value
            }
        )
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.loginAction(this.state)
    }
    render() {
        const { email, password } = this.state;
        const { isLoggedIn } = this.props;
        if (isLoggedIn === true) {
            return <Redirect to='/admin' />
        }
        return (
          <div>
            <form onSubmit={this.onSubmit}>
                <div>
                    Email:
                    <input
                        type="text"
                        value={email}
                        name='email'
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    Password: 
                    <input
                        type="password"
                        value={password}
                        name='password'
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
          </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    }
}
  
export default connect(mapStateToProps,{ loginAction })(Login)
