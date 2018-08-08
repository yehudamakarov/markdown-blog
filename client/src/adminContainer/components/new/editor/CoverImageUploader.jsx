import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CoverImagePopover from './CoverImagePopover';
import {
    coverImageUploadAction,
    addCoverPreviewAndBase64ImageAction,
    removeCoverImageFromPreviewAndBase64Action,
    removeCoverImageWithUrlAction,
} from '../../../../store/actions/imageActions';
import UploadedImageUrlPreview from './UploadedImageUrlPreview';

class CoverImageUploader extends Component {
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
        borderRadius: '4px',
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingRight: '16px',
        paddingLeft: '16px',
        background: '#689f38',
        color: '#cfd8dc',
    };
    // TO-DO
    // - Reject anything not an image for imgur

    onDrop = acceptedFiles => {
        const { addCoverPreviewAndBase64ImageAction } = this.props;
        // Loop over each file.
        acceptedFiles.forEach(fileObject => {
            // Make a FileReader
            // eslint-disable-next-line no-undef
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
                addCoverPreviewAndBase64ImageAction(imageObjectWithPreviewAndBase64);
            };
            // Do said above for the file on this iteration of the images.
            reader.readAsDataURL(fileObject);
        });
    };

    // Send images from the redux store { Filename: Base64 and preview:
    // Preview Url } to imgur, remove them from the store and be left
    // with redux store with { Filename: Url }
    handleUploadClick = () => {
        const { coverImageUploadAction, coverImagesWithPreviewAndBase64 } = this.props;
        coverImageUploadAction(coverImagesWithPreviewAndBase64);
    };

    // Remove an image from the redux store and preview pane
    handlePictureRemove = index => {
        const { removeCoverImageFromPreviewAndBase64Action } = this.props;
        removeCoverImageFromPreviewAndBase64Action(index);
    };

    render() {
        const { style, onUrlPrepare, onUrlDelete, coverImagesWithUrl, coverImagesWithPreviewAndBase64 } = this.props;
        const url = coverImagesWithUrl[0]
            ? Object.entries(coverImagesWithUrl[0]).map(([filename, url]) => ({
                  filename,
                  url,
              }))[0]
            : null;

        return (
            <div style={style}>
                <Grid container justify="center" spacing={16}>
                    <Grid item sm={6}>
                        <Dropzone
                            style={this.dropzoneStyle}
                            activeStyle={this.dropzoneStyleActive}
                            onDrop={this.onDrop}
                        >
                            <Typography component="div" variant="button" color="inherit">
                                Drop Cover Image
                            </Typography>
                        </Dropzone>
                    </Grid>
                    <Grid item sm={6}>
                        <Button
                            disabled={coverImagesWithPreviewAndBase64.length > 1}
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleUploadClick}
                        >
                            {coverImagesWithPreviewAndBase64.length > 1 ? 'Only Upload 1 Cover Image' : 'Upload'}
                        </Button>
                    </Grid>
                </Grid>
                <hr />
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        overflow: 'hidden',
                    }}
                >
                    {coverImagesWithUrl.length === 1 ? (
                        <UploadedImageUrlPreview onUrlPrepare={onUrlPrepare} onUrlDelete={onUrlDelete} url={url} />
                    ) : (
                        <GridList style={{ flexWrap: 'nowrap', transform: 'translateZ(0)' }} cols={1}>
                            {coverImagesWithPreviewAndBase64.map((imageObject, index) => (
                                <GridListTile key={`imageObject_${imageObject.preview}`} rows={1.5}>
                                    <img src={imageObject.preview} alt="" />
                                    <GridListTileBar
                                        title={Object.keys(imageObject).find(
                                            imageObjectKey => imageObjectKey !== 'preview'
                                        )}
                                        style={{
                                            background: '#4dabf5',
                                        }}
                                        actionIcon={
                                            <CoverImagePopover
                                                onClick={() => this.handlePictureRemove(index)}
                                                src={imageObject.preview}
                                            />
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    coverImagesWithUrl: state.coverImagesWithUrl,
    coverImagesWithPreviewAndBase64: state.coverImagesWithPreviewAndBase64,
});

export default connect(
    mapStateToProps,
    {
        coverImageUploadAction,
        addCoverPreviewAndBase64ImageAction,
        removeCoverImageFromPreviewAndBase64Action,
        removeCoverImageWithUrlAction,
    }
)(CoverImageUploader);
