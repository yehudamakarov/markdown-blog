import React from 'react';
import { Route, Redirect } from "react-router-dom";
import fakeAuth from './fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route exact { ...rest } render={(routeProps) => (
      // reduxstore.isLoggedIn
      fakeAuth.isAuthenticated === true
        ? <Component {...routeProps} />
        : <Redirect to={{
              pathname: '/login'
            }} 
          />
      )}
    />
)

export default PrivateRoute