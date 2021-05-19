import * as memesTypes from './memes-types';

const memesInitialSatate = {
    loading: false,
    error: null,
    giphyMemes: [],
    offset: 0,
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
                offset: state.offset + 12,
                giphyMemes: [...state.giphyMemes, ...payload],
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
