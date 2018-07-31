import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ImagePopover from './ImagePopover';
import imageUploadAction from '../../../../store/actions/imageUploadAction';
import addPreviewAndBase64ImageAction from '../../../../store/actions/addPreviewAndBase64ImageAction';
import removeImageFromPreviewAndBase64Action from '../../../../store/actions/removeImageFromPreviewAndBase64Action';

class ImageUploader extends Component {
    // TO-DO
    // - Reject anything not an image for imgur

    onDrop = acceptedFiles => {
        // Loop over each file.
        acceptedFiles.forEach(fileObject => {
            // Make a FileReader
            const reader = new FileReader();
            // Tell the FileReader what to do to when it is done with its file
            reader.onload = ({ target: reader }) => {
                // Prepare the Base64
                const base64ToUpload = reader.result
                    .replace('data:image/png;base64,', '')
                    .replace('data:image/jpeg;base64,', '');
                // Make an object for the image where { Filename: Base64 and preview:
                // Preview Url }
                const imageObjectWithPreviewAndBase64 = {
                    [fileObject.name]: base64ToUpload,
                    preview: fileObject.preview,
                };
                // Send that object to the store.
                this.props.addPreviewAndBase64ImageAction(imageObjectWithPreviewAndBase64);
            };
            // Do said above for the file on this iteration of the images.
            reader.readAsDataURL(fileObject);
        });
    };

    // Send images from the redux store { Filename: Base64 and preview:
    // Preview Url } to imgur, remove them from the store and be left
    // with redux store with { Filename: Url }
    handleUploadClick = event => {
        this.props.imageUploadAction(this.props.imagesWithPreviewAndBase64);
    };

    // Remove an image from the redux store and preview pane
    handlePictureRemove = index => {
        this.props.removeImageFromPreviewAndBase64Action(index);
    };

    dropzoneStyle = {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        background: '#6ec6ff',
        borderRadius: '4px',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingRight: '16px',
        paddingLeft: '16px',
        color: '#fff',
    };

    dropzoneStyleActive = {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        background: '#6ec6ff',
        borderRadius: '4px',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingRight: '16px',
        paddingLeft: '16px',
        background: '#689f38',
        color: '#cfd8dc',
    };

    render() {
        return (
            <Paper elevation={8} style={{ padding: '1%', paddingBottom: '2%' }}>
                <Grid container justify="center" spacing={16}>
                    <Grid item sm={6}>
                        <Dropzone
                            style={this.dropzoneStyle}
                            activeStyle={this.dropzoneStyleActive}
                            onDrop={this.onDrop}
                        >
                            <Typography component="div" variant="button" color="inherit">
                                Drop Images Here
                            </Typography>
                        </Dropzone>
                    </Grid>
                    <Grid item sm={6}>
                        <Button fullWidth variant="contained" color="primary" onClick={this.handleUploadClick}>
                            Upload
                        </Button>
                    </Grid>
                </Grid>
                <hr />
                <Fragment>
                    <Typography variant="title">Images To Upload:</Typography>
                </Fragment>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        overflow: 'hidden',
                    }}
                >
                    <GridList style={{ flexWrap: 'nowrap', transform: 'translateZ(0)' }} cols={2.5}>
                        {this.props.imagesWithPreviewAndBase64.map((imageObject, index) => (
                            <GridListTile key={index} rows={2}>
                                <img src={imageObject.preview} />
                                <GridListTileBar
                                    title={Object.keys(imageObject).find(
                                        imageObjectKey => imageObjectKey !== 'preview'
                                    )}
                                    style={{
                                        background: '#4dabf5',
                                    }}
                                    actionIcon={
                                        <ImagePopover
                                            onClick={() => this.handlePictureRemove(index)}
                                            src={imageObject.preview}
                                        />
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    imagesWithUrl: state.imagesWithUrl,
    imagesWithPreviewAndBase64: state.imagesWithPreviewAndBase64,
});

export default connect(
    mapStateToProps,
    { imageUploadAction, addPreviewAndBase64ImageAction, removeImageFromPreviewAndBase64Action }
)(ImageUploader);
