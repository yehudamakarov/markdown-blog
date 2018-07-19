import React from 'react'
import { withRouter } from 'react-router-dom';
import fakeAuth from './fakeAuth';

const Logout = withRouter(({ history }) => (
    fakeAuth.isAuthenticated === true
      ? <button onClick={() => {
          fakeAuth.signOut(() => {
            history.push('/')
          })
        }}>LogOut</button>
      : null
  ))

export default Logout;