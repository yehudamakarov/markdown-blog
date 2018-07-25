import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import imagesWithUrlReducer from './imagesWithUrlReducer';
import imagesWithPreviewAndBase64Reducer from './imagesWithPreviewAndBase64Reducer';

const rootReducer = combineReducers(
    {
        auth: loginReducer,
        imagesWithPreviewAndBase64: imagesWithPreviewAndBase64Reducer,
        imagesWithUrl: imagesWithUrlReducer,
    }
)

export default rootReducer