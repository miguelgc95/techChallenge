import * as MemesTypes from './memes-types';
import { getMemes } from '../../services/giphy';

export const memesRequest = () => ({
    type: MemesTypes.MEMES_REQUEST,
});

export const memesSucces = memesArray => ({
    type: MemesTypes.MEMES_SUCCES,
    payload: memesArray,
});

export const memesRequestError = error => ({
    type: MemesTypes.MEMES_ERROR,
    error,
});

export function getGiphys() {
    return async function giphyMemesThunk(dispatch) {
        dispatch(memesRequest());
        try {
            const momardos = await getMemes();
            dispatch(memesSucces(momardos.data.data));
        } catch (error) {
            dispatch(memesRequestError(error.message));
        }
    };
}
