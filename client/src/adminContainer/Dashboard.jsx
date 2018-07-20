import React, { Component } from 'react'
import MyUploader from '../components/TestUploader'
import MarkdownEditor from '../components/TestEditor';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Admin Dashboard</h3>
        <MarkdownEditor />
        <MyUploader/>
      </div>
    )
  }
}
