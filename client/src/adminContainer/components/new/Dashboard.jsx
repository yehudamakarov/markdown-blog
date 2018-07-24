import React, { Component } from 'react'
import MarkdownEditor from './editor/EditorContainer';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <MarkdownEditor />
      </div>
    )
  }
}
