import * as MemesTypes from './memes-types';
import api from '../../api';

export const memesRequest = () => ({
    type: MemesTypes.MEMES_REQUEST,
});

export const memesSucces = () => ({
    type: MemesTypes.MEMES_SUCCES,
});

export const memesRequestError = error => ({
    type: MemesTypes.MEMES_ERROR,
    error,
});

export function giphyMemes() {
    return async function giphyMemesThunk(dispatch) {
        dispatch(memesRequest());
        try {
        } catch (error) {
            dispatch(memesRequestError(error.message));
        }
    };
}
