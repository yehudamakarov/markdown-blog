import axios from 'axios';
import getId from '../../id';

const coverImageUploadAction = imagesWithPreviewAndBase64 => (dispatch, getState) => {
    imagesWithPreviewAndBase64.forEach(imageObjectWithPreviewAndBase64 => {
        // Get the Base 64 string out of the object
        const base64 =
            imageObjectWithPreviewAndBase64[
                Object.keys(imageObjectWithPreviewAndBase64).find(imageObjectKey => imageObjectKey !== 'preview')
            ];
        // Post to Imgur, then put a new object in the store that has the
        // Url in it
        axios({
            method: 'post',
            url: 'https://api.imgur.com/3/image',
            data: {
                image: base64,
            },
            headers: {
                Authorization: `Client-ID ${getId()}`,
            },
        })
            .then(resp => {
                const imageObjectWithUrl = {
                    [Object.keys(imageObjectWithPreviewAndBase64).find(
                        imageObjectKey => imageObjectKey !== 'preview'
                    )]: resp.data.data.link,
                };
                dispatch({
                    type: 'ADD_COVER_IMAGE_WITH_URL',
                    payload: imageObjectWithUrl,
                });
            })
            .then(() => {
                const index = getState().coverImagesWithPreviewAndBase64.findIndex(
                    imageWithPreviewAndBase64 =>
                        imageObjectWithPreviewAndBase64.preview === imageWithPreviewAndBase64.preview
                );
                dispatch({
                    type: 'REMOVE_COVER_IMAGE_FROM_PREVIEW_AND_BASE_64',
                    payload: index,
                });
            });
    });
};

export default coverImageUploadAction;
