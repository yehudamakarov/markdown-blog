import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from "../../store/actions/loginAction";

const Logout = withRouter(({ history, isLoggedIn, logoutAction }) => (
    isLoggedIn === true
      ? <button onClick={() => {
          logoutAction().then(() => {
            history.push('/')
          })
        }}>LogOut</button>
      : null
))

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, { logoutAction })(Logout)
