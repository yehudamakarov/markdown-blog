import React, { Component } from 'react'
import Dashboard from './components/new/Dashboard'
import { connect } from 'react-redux';

export class AdminContainer extends Component {

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default connect(null)(AdminContainer)
