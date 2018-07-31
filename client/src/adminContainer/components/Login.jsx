import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/loginAction';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    onChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });
    };

    onSubmit = event => {
        const { loginAction } = this.props;
        event.preventDefault();
        loginAction(this.state);
    };

    render() {
        const { email, password } = this.state;
        const { isLoggedIn } = this.props;
        if (isLoggedIn === true) {
            return <Redirect to="/admin" />;
        }
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        Email:
                        <input type="text" value={email} name="email" onChange={this.onChange} />
                    </div>
                    <div>
                        Password:
                        <input type="password" value={password} name="password" onChange={this.onChange} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

export default connect(
    mapStateToProps,
    { loginAction }
)(Login);
