import * as memesTypes from './memes-types';

const memesInitialSatate = {
    loading: false,
    error: null,
    giphyMemes: [],
};

const memesReducer = (state = memesInitialSatate, action) => {
    const { type, payload } = action;
    switch (type) {
        case memesTypes.MEMES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case memesTypes.MEMES_SUCCES:
            return {
                ...state,
                loading: false,
                error: false,
                giphyMemes: [...payload, state.giphyMemes.flat()],
            };
        case memesTypes.MEMES_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};

export default memesReducer;
