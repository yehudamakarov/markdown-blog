import React, { Component } from 'react'
import Logout from './Logout';
import Dashboard from './Dashboard'
import { connect } from 'react-redux';

export class AdminContainer extends Component {

  render() {
    return (
      <div>
        <Dashboard />
        <Logout/>       
      </div>
    )
  }
}

export default connect(null)(AdminContainer)
