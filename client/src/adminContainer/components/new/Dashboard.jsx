import React, { Component } from 'react'
import MarkdownEditor from './editor/EditorContainer';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Admin Dashboard</h3>
        <MarkdownEditor />
      </div>
    )
  }
}
