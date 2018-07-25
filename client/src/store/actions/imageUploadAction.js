import axios from 'axios';
import getId from '../../id'

const imageUploadAction = (imagesWithPreviewAndBase64) => {
    return (dispatch, getState) => {
        imagesWithPreviewAndBase64.forEach(imageObjectWithPreviewAndBase64 => {
            // Get the Base 64 string out of the object
            const base64 = imageObjectWithPreviewAndBase64[Object.keys(imageObjectWithPreviewAndBase64).find((imageObjectKey) => {
                return imageObjectKey !== 'preview'
            })];
            // Post to Imgur, then put a new object in the store that has the
            // Url in it
            axios({
                method: 'post',
                url: 'https://api.imgur.com/3/image',
                data: {
                  'image': base64,
                },
                headers: {
                  'Authorization': `Client-ID ${getId()}`,
                }
              }).then((resp) => {
                    const imageObjectWithUrl = {
                        [Object.keys(imageObjectWithPreviewAndBase64).find((imageObjectKey) => {
                            return imageObjectKey !== 'preview'
                        })]: resp.data.data.link
                    };
                    dispatch({
                        type:  'ADD_IMAGE_WITH_URL',
                        payload: imageObjectWithUrl,
                    });
                }).then(() => {
                    const index = getState().imagesWithPreviewAndBase64.findIndex((imageWithPreviewAndBase64) => {
                        return imageObjectWithPreviewAndBase64.preview === imageWithPreviewAndBase64.preview
                    })
                    dispatch({
                        type: 'REMOVE_IMAGE_FROM_PREVIEW_AND_BASE_64',
                        payload: index
                    })
                })
        });
    };
};

export default imageUploadAction;
