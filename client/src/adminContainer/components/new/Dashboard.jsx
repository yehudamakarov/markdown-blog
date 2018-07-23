import React, { Component } from 'react'
import MarkdownEditor from './editor/EditorContainer';
import Logout from '../Logout';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Admin Dashboard</h3>
        <MarkdownEditor />
        <Logout/>       
      </div>
    )
  }
}
