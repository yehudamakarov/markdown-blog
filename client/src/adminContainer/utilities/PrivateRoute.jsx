import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const RedirectToLogin = () => <Redirect to="/login" />;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={rest.isLoggedIn === true ? Component : RedirectToLogin} />
);

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
