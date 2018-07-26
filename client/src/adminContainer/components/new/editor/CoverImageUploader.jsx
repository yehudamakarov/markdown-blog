import React, { Component, Fragment } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import coverImageUploadAction from '../../../../store/actions/coverImageUploadAction';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CoverImagePopover from './CoverImagePopover';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import addCoverPreviewAndBase64ImageAction from '../../../../store/actions/addCoverPreviewAndBase64ImageAction';
import removeCoverImageFromPreviewAndBase64Action from '../../../../store/actions/removeCoverImageFromPreviewAndBase64Action';

class CoverImageUploader extends Component {
  // TO-DO
  // - Reject anything not an image for imgur

  onDrop = (acceptedFiles) => {
    // Loop over each file.
    acceptedFiles.forEach(fileObject => {
      // Make a FileReader
      const reader = new FileReader();
      // Tell the FileReader what to do to when it is done with its file
      reader.onload = ({ target: reader }) => {
        // Prepare the Base64
        const base64ToUpload = reader.result.replace('data:image/png;base64,', '');
        // Make an object for the image where { Filename: Base64 and preview:
        // Preview Url }
        const imageObjectWithPreviewAndBase64 = {
          [fileObject.name]: base64ToUpload,
          preview: fileObject.preview,
        };
        // Send that object to the store.
        this.props.addCoverPreviewAndBase64ImageAction(imageObjectWithPreviewAndBase64);
      }
      // Do said above for the file on this iteration of the images.
      reader.readAsDataURL(fileObject);
    });
  }

  // Send images from the redux store { Filename: Base64 and preview:
  // Preview Url } to imgur, remove them from the store and be left 
  // with redux store with { Filename: Url }
  handleUploadClick = (event) => {
    this.props.coverImageUploadAction(this.props.coverImagesWithPreviewAndBase64);
  }

  // Remove an image from the redux store and preview pane
  handlePictureRemove = (index) => {
    this.props.removeCoverImageFromPreviewAndBase64Action(index);
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
      <div>
        <Grid container justify='center' spacing={16}>
          <Grid item sm={6}>
            <Dropzone style={this.dropzoneStyle} activeStyle={this.dropzoneStyleActive} onDrop={this.onDrop}>
              <Typography component='div' variant='button' color='inherit'>
                Drop Cover Image Here
              </Typography>
            </Dropzone>
          </Grid>
          <Grid item sm={6}>
            <Button
              disabled={
                this.props.coverImagesWithPreviewAndBase64.length > 1
                  ? true
                  : false
                }
              fullWidth={true}
              variant='contained'
              color='primary'
              onClick={this.handleUploadClick}
            >
              {this.props.coverImagesWithPreviewAndBase64.length > 1
                ? 'Only Upload 1 Cover Image'
                : 'Upload'}
            </Button>
          </Grid>
        </Grid>
        <hr/>
        <div style={
          {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            overflow: 'hidden',
          }
        }>
          <GridList style={{flexWrap: 'nowrap', transform: 'translateZ(0)',}} cols={1}>
            {this.props.coverImagesWithPreviewAndBase64.map((imageObject, index) => 
              <GridListTile key={index} rows={1.5}>
                <img style={{maxWidth: '100%', height: 'auto'}} src={imageObject.preview} />
                <GridListTileBar
                  title={Object.keys(imageObject).find((imageObjectKey) => {
                    return imageObjectKey !== 'preview'
                  })}
                  style={{
                    background: '#4dabf5',
                  }}
                  actionIcon={
                    <CoverImagePopover onClick={() => this.handlePictureRemove(index)} src={imageObject.preview} />
                  }
                />
              </GridListTile>
              )
            }
          </GridList>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coverImagesWithUrl: state.coverImagesWithUrl,
    coverImagesWithPreviewAndBase64: state.coverImagesWithPreviewAndBase64,
  }
}

export default connect(mapStateToProps, { coverImageUploadAction, addCoverPreviewAndBase64ImageAction, removeCoverImageFromPreviewAndBase64Action })(CoverImageUploader)