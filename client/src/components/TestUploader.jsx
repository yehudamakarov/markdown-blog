import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

export default class TestUploader extends Component {
    onDrop = (files) => {
        debugger;
    }
  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop} />
      </div>
    )
  }
}
