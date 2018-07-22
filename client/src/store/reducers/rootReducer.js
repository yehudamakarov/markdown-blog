import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import imageReducer from './imageReducer';

const rootReducer = combineReducers(
    {
        auth: loginReducer,
        imagesForPost: imageReducer,
    }
)

export default rootReducer