import React from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={(routeProps) => (
      rest.isLoggedIn === true
        ? <Component />
        : <Redirect to='/login' />
      )}  
  />
  
  
)

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    }
  }
  
export default withRouter(connect(mapStateToProps)(PrivateRoute))

