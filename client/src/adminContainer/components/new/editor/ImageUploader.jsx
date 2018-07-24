import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import imageUploadAction from '../../../../store/actions/imageUploadAction';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

class TestUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageFiles: [],
    }
  }

  onDrop = (acceptedFiles) => {
    acceptedFiles.forEach(fileObject => {
      this.setState({
        imagesFiles: [
            ...this.state.imageFiles,
            fileObject
        ]
      });
      // reject anything that is not an image
      const reader = new FileReader();

      reader.onload = ({ target: reader }) => {
        let base64ToUpload = reader.result.replace('data:image/png;base64,', '')
        const imageObjectForState = {
          [fileObject.name]: base64ToUpload
        };
        this.setState({
          images: [
              ...this.state.images,
              imageObjectForState
          ]
        });
      }

      reader.readAsDataURL(fileObject);
    });
  }

  handleUploadClick = (event) => {
    this.props.imageUploadAction(this.state.images);
  }

  dropzoneStyle = {
    width  : '100%',
    height : '100%',
    border : '1px solid black'
  };

  dropzoneStyleActive = {
    width  : '100%',
    height : '100%',
    border : '1px solid black',
    background: 'green'
  };

  render() {
    return (
      <Grid container>
        <Grid item sm >
          <Dropzone style={this.dropzoneStyle} activeStyle={this.dropzoneStyleActive} onDrop={this.onDrop}>
            <Typography variant='button'>Drop Image Files here</Typography>
          </Dropzone>
        </Grid>
        <Grid item sm >
          <Button variant='contained' color='primary' onClick={this.handleUploadClick}>Try Upload</Button>
        </Grid>
      </Grid>
    )
  }
}

export default connect(null, { imageUploadAction })(TestUploader)
