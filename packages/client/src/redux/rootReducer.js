import { combineReducers } from 'redux';

import auth from './auth/auth-reducer';
import memes from './memes/memes-reducer';

const RESET_STORE_AND_LOG_OUT = 'RESET_STORE_AND_LOG_OUT';

export const resetStoreAndLogOut = () => ({
    type: RESET_STORE_AND_LOG_OUT,
});

const appReducer = combineReducers({
    auth,
    memes,
});

const rootReducer = (state, action) => {
    if (action.type === RESET_STORE_AND_LOG_OUT) {
        state.auth = undefined;
        localStorage.clear();
    }

    return appReducer(state, action);
};

export default rootReducer;
