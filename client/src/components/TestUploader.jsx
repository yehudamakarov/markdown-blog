import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import FormData from 'form-data';

export default class TestUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [

      ]
    }
  }

  tryUpload = () => {
    const base64 = this.state.images[0][Object.keys(this.state.images[0])[0]]
    console.log('base64 :', base64);
    // const axi = axios;
    // const resp = axios.post('https://api.imgur.com/3/image', {image: binaryString}, {headers: {'Authorization': 'Client-ID 9ff2cbb10ead695'}}).then((resp) => {
    //   console.log('resp :', resp);
    // })
    // const plainFormData = this.state.images[0]
    // console.log('plainFormData :', plainFormData);
    const resp = axios({
      method: 'post',
      url: 'https://api.imgur.com/3/image',
      data: base64,
      headers: {
        'Authorization': 'Client-ID 9ff2cbb10ead695',
        'content-type': 'multipart/form-data'
      }
    }).then((resp) => {
      console.log('resp :', resp);
    })
  }
  
  onDrop = (acceptedFiles, rejectedFiles) => {

    // upload button
      // use state to dispatch an action with this state (array of objects).
      // that action will receive the arg and make posts to imgur with each img.
      // each received url will be made into an object and added to the redux state
      // will be an array of objects, but with urls instead of binary strings for each value.
    // now the redux state hase our img urls mapped to their names matching in the editor

    // replace imgMarkdow button
      // replace string, using regex and function. function will take match and replace with
      // value in redux store with matching key
    // now the markdown's images got replaced.

    // upload the post


    acceptedFiles.forEach(fileObj => {
      const reader = new FileReader();
      reader.onload = ({ target: reader }) => {
        let replaced = reader.result.replace('data:image/png;base64,', '')
        const imgObj = {[fileObj.name]: replaced };
        console.log('this :', this);
        console.log('imgObj :', imgObj);
        this.setState(
          {
            images: [
              ...this.state.images,
              imgObj
            ]
          }
        )
      }
      reader.readAsDataURL(fileObj);
      // let data = new FormData();
      // data.append('file', fileObj)
      // console.log('data :', data);
      // this.setState({
      //   images: [
      //     ...this.state.images,
      //     data
      //   ]
      // })
    });
  }
  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop} />
        <button onClick={this.tryUpload}>Try Upload</button>
      </div>
    )
  }
}
