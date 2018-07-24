import React, { Component } from 'react'
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
        imageFiles: [
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

  handlePictureRemove = (index) => {
    this.setState({
      images: [
        ...this.state.images.slice(0, index),
        ...this.state.images.slice(index + 1)
      ],
      imageFiles: [
        ...this.state.imageFiles.slice(0, index),
        ...this.state.imageFiles.slice(index + 1)
      ]
    })
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
              <Button fullWidth={true} variant='contained' color='primary' onClick={this.handleUploadClick}>Try Upload</Button>
          </Grid>
        </Grid>
        <hr/>
        <Typography variant='title'>Images To Upload:</Typography>
        <GridList>
          {this.state.imageFiles.map((fileObject, index) => 
              
            <GridListTile style={{maxWidth: '18%'}} key={index}>
              <Paper>
              <hr/>
                <Typography variant='button'>
                  File Name: 
                </Typography>
                <Typography variant='subheading'>
                  {fileObject.name}
                </Typography>
              <hr/>
                <Typography variant='button'>
                  File Size: 
                </Typography>
                <Typography variant='subheading'>
                  {fileObject.size} bytes
                </Typography>
              </Paper>
              <GridListTileBar/>
            </GridListTile>
            )
          }
        </GridList>
      </Paper>
    )
  }
}

export default connect(null, { imageUploadAction })(ImageUploader)

// <Button onClick={(event) => this.handlePictureRemove(index)} size='small' variant='contained' color='secondary'>
//                   Remove
//                 </Button>
//                 <Button size='small' variant='contained' color='primary' >
//                   <ImagePopover src={fileObject.preview} />
//                 </Button>
