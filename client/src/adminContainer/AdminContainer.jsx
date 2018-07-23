import React, { Component } from 'react'
import { connect } from 'react-redux';
import AppBar from './components/AppBar';

export class AdminContainer extends Component {

  render() {
    return (
      <div>
        <AppBar />
      </div>
    )
  }
}

export default connect(null)(AdminContainer)
