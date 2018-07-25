import React, { Component, Fragment } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import imageUploadAction from '../../../../store/actions/imageUploadAction';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ImagePopover from './ImagePopover';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import addPreviewAndBase64ImageAction from '../../../../store/actions/addPreviewAndBase64ImageAction';
import removeImageFromPreviewAndBase64Action from '../../../../store/actions/removeImageFromPreviewAndBase64Action';


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

class ImageUploader extends Component {

  onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((fileObject, index, array) => {
      // reject anything that is not an image
      const reader = new FileReader();

      reader.onload = ({ target: reader }) => {
        const base64ToUpload = reader.result.replace('data:image/png;base64,', '')
        const imageObjectWithPreviewAndBase64 = {
          [fileObject.name]: base64ToUpload,
          preview: fileObject.preview,
        };
        console.log('imageObjectWithPreviewAndBase64 :', imageObjectWithPreviewAndBase64);
        this.props.addPreviewAndBase64ImageAction(imageObjectWithPreviewAndBase64);
      }

      reader.readAsDataURL(fileObject);
    });
  }

  handleUploadClick = (event) => {
    this.props.imageUploadAction(this.props.imagesWithPreviewAndBase64);
  }

  handlePictureRemove = (index) => {
    this.props.removeImageFromPreviewAndBase64Action(index);
;
  }

  dropzoneStyle = {
    width  : '100%',
    height : '100%',
    textAlign: 'center',
    background: '#6ec6ff',
    borderRadius: '4px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingRight: '16px',
    paddingLeft: '16px',
    color: '#fff'
  };

  dropzoneStyleActive = {
    width  : '100%',
    height : '100%',
    textAlign: 'center',
    background: '#6ec6ff',
    borderRadius: '4px',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingRight: '16px',
    paddingLeft: '16px',
    background: '#689f38',
    color: '#cfd8dc'
  };

  render() {
    return (
      <Paper elevation={8} style={{padding: '1%', paddingBottom: '2%'}}>
        <Grid container justify='center' spacing={16}>
          <Grid item sm={6}>
            <Dropzone style={this.dropzoneStyle} activeStyle={this.dropzoneStyleActive} onDrop={this.onDrop}>
              <Typography component='div' variant='button' color='inherit'>
                Drop Images Here
              </Typography>
            </Dropzone>
          </Grid>
          <Grid item sm={6}>
              <Button fullWidth={true} variant='contained' color='primary' onClick={this.handleUploadClick}>Upload</Button>
          </Grid>
        </Grid>
        <hr/>
        <Fragment>
          <Typography variant='title'>Images To Upload:</Typography>
        </Fragment>
        <div style={
          {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            overflow: 'hidden',
          }
        }>
          <GridList style={{flexWrap: 'nowrap', transform: 'translateZ(0)',}} cols={2.2}>
            {this.props.imagesWithPreviewAndBase64.map((imageObject, index) => 
              <GridListTile key={index} rows={1.7}>
                <img src={imageObject.preview} />
                <GridListTileBar
                  title={Object.keys(imageObject).find((imageObjectKey) => {
                    return imageObjectKey !== 'preview'
                  })}
                  style={{
                    background: '#4dabf5',
                  }}
                  actionIcon={
                    <ImagePopover onClick={(event) => this.handlePictureRemove(index)} src={imageObject.preview} />
                  }
                />
              </GridListTile>
              )
            }
          </GridList>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imagesWithUrl: state.imagesWithUrl,
    imagesWithPreviewAndBase64: state.imagesWithPreviewAndBase64,
  }
}

export default connect(mapStateToProps, { imageUploadAction, addPreviewAndBase64ImageAction, removeImageFromPreviewAndBase64Action })(ImageUploader)