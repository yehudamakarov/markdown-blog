import axios from 'axios';

// this function will receive an array of objects.
// each objects's key is the file name, and the store needs the objects to have
// values of the new URL of the image.

const imageUploadAction = (imageObjects) => {
    return (dispatch) => {
        imageObjects.forEach(imageObject => {
            const base64 = imageObject[Object.keys(imageObject)[0]];
            axios({
                method: 'post',
                url: 'https://api.imgur.com/3/image',
                data: {
                  'image': base64,
                },
                headers: {
                  'Authorization': 'Client-ID 9ff2cbb10ead695',
                }
              }).then((resp) => {
                const imageObjectWithUrl = {
                    [Object.keys(imageObject)[0]]: resp.data.data.link
                };
                dispatch({
                    type:  'ADD_IMAGE',
                    payload: imageObjectWithUrl,
                });
            });
        });
    };
};

export default imageUploadAction;
