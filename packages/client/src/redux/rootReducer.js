import { combineReducers } from 'redux';

import auth from './auth/auth-reducer';
import memes from './memes/memes-reducer';

const rootReducer = combineReducers({
    auth,
    memes,
});

export default rootReducer;
