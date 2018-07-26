import React from 'react'
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from "../../store/actions/loginAction";

const Logout = withRouter(({ history, isLoggedIn }) => (
    isLoggedIn === true
      ? <Button color="inherit" onClick={() => {
          logoutAction().then(() => {
            history.push('/')
          })
        }}>Log Out</Button>
      : null
))

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
  })

export default connect(mapStateToProps, { logoutAction })(Logout)
